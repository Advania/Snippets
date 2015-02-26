
# XSLT Default LiSA newsitem template


Here is the Default XSLT newsitem template with html5 tags.

```xslt
<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0" xmlns:lisa="lisa:XsltExtensions" xmlns:control="lisa:ControlInfo" exclude-result-prefixes="lisa control">
    
    <xsl:output method="xml" omit-xml-declaration="yes" indent="yes" />
    
    <xsl:template match="News/Item">
    
    <xsl:value-of select="control:SetPageTitle(Title)" />
    <xsl:value-of select="control:AddOpenGraphTag('og:title',Title)" />
    <xsl:value-of select="control:AddOpenGraphTag('og:description',Abstract)" />
    <xsl:if test="NewsImageId != ''">
        <xsl:value-of select="control:AddOpenGraphTag('og:image',concat(lisa:GetProtocol(),'://',lisa:GetHostHeader(),lisa:GetUrl(concat('/lisalib/getfile.aspx?itemid=', NewsImageId,'&amp;proc=50x50'))))" />
    </xsl:if>
    
    
    <article class="media">
        <header>
            <h1><xsl:value-of select="Title" disable-output-escaping="yes" /></h1>
            <time><xsl:value-of select="Start" disable-output-escaping="yes" /></time>
        </header>
        
        <xsl:if test="count(Images/Item) &gt; 0 and NewsImageId != ''">
            <xsl:for-each select="Images/Item[ImageId = ../../NewsImageId]">
                <figure>
                    <a href="{Url}{Url/@npe}" class="pull-left">
                        <img src="{Url}{Url/@npe}proc=250x250" alt="{Description}" class="media-object" />
                    </a>
                </figure>
            </xsl:for-each>
        </xsl:if>
        
        <section class="media-content">
            <p><xsl:value-of select="Content" disable-output-escaping="yes" /></p>
        </section>
        
        <xsl:if test="count(Images/Item) &gt; 1">
            <hr />
            <section class="thumbnails">
                <h2><xsl:value-of select="control:Localize('View','ArticleImages','Loc$ViewNewsItem/ArticleImages')" /></h2>
                <div class="row">
                    <xsl:for-each select="Images/Item[ImageId != ../../NewsImageId]">
                        <div class="col-md-3">
                            <figure>
                                <img src="{Url}{Url/@npe}proc=150x150" alt="{Description}" class="img-thumbnail" /><xsl:value-of select="concat(' ','')" />
                            </figure>
                        </div>
                    </xsl:for-each>
                </div>
            </section>
        </xsl:if>
        
        <footer>
            <a href="javascript:history.go(-1);" class="btn btn-default">
                <xsl:value-of select="control:Localize('View','BackText','Loc$ViewGeneral/BackText')" />
            </a>
        </footer>
    </article>
    
    </xsl:template>
</xsl:stylesheet>
```


