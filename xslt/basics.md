
# XSLT Basics

XSLT (Extensible Stylesheet Language Transformations) is a language for transforming XML documents into HTML for web pages, plain text or into XSL Formatting Objects.

So in other words, it's a template language to display dynamic values with in static layout.

Here are code example showing basic syntax and tips.

## Table of Content

* [Variable](#variable)
* [If and Choose](#if-and-choose)
* [Display text and values with `value-of` element](#display-text-and-values-with-value-of-element)
* [For-each](#for-each)
* [Debuging](#debuging)



***


## Variable

Source and example: http://www.w3schools.com/xsl/el_variable.asp

> **Tip:** The variable is global if it's declared as a top-level element, and local if it's declared within a template.

> **Tip:** Once you have set a variable's value, you cannot change or modify that value!


Insert the string "red" into a variable named color and print it out:
```xslt
<xsl:variable name="color" select="'red'" />
I like the color <xsl:value-of select="$color" />
<!-- Will output: -->
I like the color red
```
**Note:** After being declared you use `$` character in front of the name you picked

You can also apply value without the `select=""` attribute:
```xslt
<xsl:variable name="color">red</xsl:variable>
```

It is speacially useful when a variable is 
```xslt
<xsl:variable name="image">
    <xsl:if test="property[@name='picture'] != ''">
        <xsl:value-of select="property[@name='picture']/file/id" />
    </xsl:if>
    <xsl:if test="property[@name='picture'] = ''">
        <!-- The ID of image that is default placeholder when image is missing -->
    </xsl:if>
</xsl:variable>
<!-- or with choose -->
<xsl:variable name="image">
    <xsl:choose>
        <xsl:when test="property[@name='picture'] != ''">
            <xsl:value-of select="property[@name='picture']/file/id" />
        </xsl:when>
        <xsl:otherwise>
            <!-- The ID of image that is default placeholder when image is missing -->
        </xsl:otherwise>
    </xsl:choose>
</xsl:variable>
```


If the `<xsl:variable>` element only contains a name attribute, and there is no content, then the value of the variable is an empty string:
```xslt
<xsl:variable name="emptyString" />
<!-- Or -->
<xsl:variable name="emptyString"></xsl:variable>
```


***


## If and Choose

Source and example for `if`: http://www.w3schools.com/xsl/el_if.asp
Source and example for `choose`: http://www.w3schools.com/xsl/el_choose.asp

### Syntax

```xslt
<xsl:if test="expression">
    <!-- Content: template -->
</xsl:if>

<xsl:choose>
    <!-- Content:(xsl:when+,xsl:otherwise?) -->
    <xsl:when test="boolean-expression">
        <!-- Content: template -->
    </xsl:when>
    <xsl:otherwise>
        <!-- Content:template -->
    </xsl:otherwise>
</xsl:choose>
```
**Note**: In `<xsl:choose>` there can be 1 or more of `xsl:when` and 0 or 1 of `xsl:otherwise`

### Attributes for `<xsl:if>`

| Attributes | Value      | Description |
| ---------- | ---------- | ----------- |
| test       | expression | **Required.** Specifies the condition to be tested |

### Attributes for `<xsl:when>`
**Note**: There is no attribute for `<xsl:choose>` or `xsl:otherwise`

| Attributes | Value              | Description |
| ---------- | ------------------ | ----------- |
| test       | boolean-expression | **Required.** Specifies a Boolean expression to be tested |

### Examples

```xslt
<!-- TODO -->
```


***


## Display text and values with `value-of` element

Source and example: http://www.w3schools.com/xsl/el_value-of.asp

### Syntax

```xslt
<xsl:value-of select="expression" disable-output-escaping="yes|no" />
```

### Attributes

| Attributes              | Value         | Description |
| ----------------------- | ------------- | ----------- |
| select                  | expression    | **Required**. An XPath expression that specifies which node/attribute to extract the value from. It works like navigating a file system where a forward slash (/) selects subdirectories. |
| disable-output-escaping | `yes` or `no` | **Optional**. `yes` indicates that special characters (like `<`) should be output as is. `no` indicates that characters (like "<") should be output as `&lt;`. **Default is** `no` |


### Examples

```xslt
<xsl:value-of select="'Hello World'" />
<!-- Or -->
<xsl:value-of select='"Hello World"' />
```
**Note:** Single and double quotes work the same and is useful to clarify a string inside a `test=""` and `select=""`. For example: `<xsl:value-of select="property[@name='titile']" />`


The example above is redundant and is only to show the type of quotes does not matter while you remember to pair the quotes. So to show more practical example:

This is the given xml that xslt have
```xml
<items>
    <item id="0da0159a-0836-429b-88b6-0f3a560cc5be">
        <property id="00c37cca-c3ad-402a-a547-3f648725c833" name="name" caption="Nafn">Steve Jobs</property>
        <property id="3cc015a4-fa70-49ba-953f-23c93669d52a" name="email" caption="Netfang">steve@jobs.com</property>
        <property id="bf8738a5-a6f0-4d1a-afef-9a8f09ff2235" name="phone" caption="Sími">588-5522</property>
        <property id="e6f02b52-71af-4df4-ad30-67bf128aeed1" name="picture" caption="Mynd">
            <file>
                <id>e1611bf0-1e4e-40ea-8a73-8ec20b1bb490</id>
            </file>
        </property>
    </item>
    <item id="629c00f1-79f7-11e3-ae2b-2e13c62bcd75">
        <property id="00c37cca-c3ad-402a-a547-3f648725c833" name="name" caption="Nafn">Bill Gates</property>
        <property id="3cc015a4-fa70-49ba-953f-23c93669d52a" name="email" caption="Netfang">bill@gates.com</property>
        <property id="bf8738a5-a6f0-4d1a-afef-9a8f09ff2235" name="phone" caption="Sími">5812345</property>
        <property id="e6f02b52-71af-4df4-ad30-67bf128aeed1" name="picture" caption="Mynd" />
    </item>
    <item id="15dd866d-ed3d-11e1-86c9-fe18b1090873">
        <property id="00c37cca-c3ad-402a-a547-3f648725c833" name="name" caption="Nafn">Linus Torvalds</property>
        <property id="3cc015a4-fa70-49ba-953f-23c93669d52a" name="email" caption="Netfang">linus@torvalds.com</property>
        <property id="bf8738a5-a6f0-4d1a-afef-9a8f09ff2235" name="phone" caption="Sími">555 5555</property>
        <property id="e6f02b52-71af-4df4-ad30-67bf128aeed1" name="picture" caption="Mynd">
            <file>
                <id>bf45404e-ed3c-11e1-86c9-fe18b1090873</id>
            </file>
        </property>
    </item>
<items>
```

This display the data in a table
```xslt
<xsl:template match="/items">
    <h1>Company employees</h1>
    <table border="1">
        <tr bgcolor="#9acd32">
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>&#160;</th><!-- &nbsp; but LiSA xslt does not validate it when "CHECK SYNTAX" -->
        </tr>
        <!-- if image is not set, the use "image missing" image -->
        <xsl:variable name="image">
            <xsl:choose>
                <!-- Note property[@name='picture']/file/is != '' does not work -->
                <xsl:when test="property[@name='picture'] != ''"><xsl:value-of select="property[@name='picture']/file/id" /></xsl:when>
                <xsl:otherwise></xsl:otherwise>
            </xsl:choose>
        </xsl:variable>
        <xsl:for-each select="item">
            <tr>
                <td><xsl:value-of select="property[@name='name']" /></td>
                <td><xsl:value-of select="property[@name='email']" /></td>
                <td><xsl:value-of select="property[@name='phone']" /></td>
                <td><img src="/lisalib/getfile.aspx?itemid={$image}" /></td>
                <!-- can also use "/lisalib/getfile.aspx?itemid={property[@name='picture']/file/id}" -->
            </tr>
        </xsl:for-each>
    </table>
</xsl:template>
```


***


## For-each

Source and example: http://www.w3schools.com/xsl/el_for-each.asp

### Syntax

```xslt
<xsl:for-each select="expression">
    <!-- Content -->
</xsl:for-each>
```

### Attributes

| Attributes              | Value         | Description |
| ----------------------- | ------------- | ----------- |
| select                  | expression    | **Required**. An XPath expression that specifies which node set to be processed. |

### Examples

```xslt
<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
    <div>
        <xsl:for-each select="catalog/cd">
            <p><xsl:value-of select="title" /></p>
        </xsl:for-each>
    </div>
</xsl:template>

</xsl:stylesheet>
```


***


## Debuging

Source and example: http://www.w3schools.com/xsl/el_copy-of.asp

To debug is good to know the `xsl:copy-of` element. The `<xsl:copy-of ... />` element creates a copy of the current node (with child nodes and attributes).
```xslt
<xsl:copy-of select="expression" />
```
**Note:** `<xsl:copy select="..."" />` does the same but without child nodes and attributes.

### Difference between `value-of` and `copy-of`/`copy`
It is also useful to debug with `<xsl:value-of select="..."" />`, the main difference between value-of and `copy`/`copy-of`

If we have this following fragment of XML and XSLT
```xml
<summary>This is a great book, 3 out of 5, would read again.</summary>
```
```xslt
<xsl:value-of select="summary" />
<!-- Outputs: This is a great book, 3 out of 5, would read again. -->
<xsl:copy-of select="summary" />
<!-- Outputs: <summary>This is a great book, 3 out of 5, would read again.</summary> -->
```
You can see the main difference the `copy` includes the `<summary>` tags

### Useful debug snippet

It's good to paste this where there are clear space in the HTML
```xslt
<h3>##### Debug part begins #####</h3>
<pre>
    <xsl:copy-of select="$query-string" />
</pre>
<h3>##### Debug part ends #####</h3>
```
**Note:** Because `copy-of` will print out node name that includes the "<>" characters then the browser will take that as an HTML tag and try to render it as one. So if you don't have `<pre>` tag around the node you'll not necessary see it.















