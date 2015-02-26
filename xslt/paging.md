
# XSLT Paging

XSLT snippet of paging with bootstrap for LiSA.

This is the snippet that is in default news list template.
```xslt
<xsl:if test="Paging/TotalRecords != 0">
    <hr />
    <ul class="pagination">
        <xsl:variable name="paging" select="lisa:GeneratePagination(1, 2, 2, 1, Paging/CurrentPage, Paging/TotalRecords, Paging/PageSize, concat($ListName,'_page'))" />
        <xsl:for-each select="$paging/Item">
            <xsl:choose>
                <xsl:when test="Type = 'Previous'"><li><a href="{Url}"><xsl:value-of select="control:Localize('View','PreviousPage','Loc$ViewGeneral/PreviousPage')" /></a></li></xsl:when>
                <xsl:when test="Type = 'Next'"><li><a href="{Url}"><xsl:value-of select="control:Localize('View','NextPage','Loc$ViewGeneral/NextPage')" /></a></li></xsl:when>
                <xsl:when test="Type = 'Current'"><li class="disabled active"><a href="#"><xsl:value-of select="Index" /></a></li></xsl:when>
                <xsl:when test="Type = 'Link'"><li><a href="{Url}"><xsl:value-of select="Index" /></a></li></xsl:when>
                <xsl:when test="Type = 'Gap'">
                    <xsl:choose>
                        <xsl:when test="Url != ''"><li><a href="{Url}"><xsl:value-of select="Index" /></a></li></xsl:when>
                        <xsl:otherwise><li class="disabled"><a href="#">...</a></li></xsl:otherwise>
                    </xsl:choose>
                </xsl:when>
            </xsl:choose>
        </xsl:for-each>
    </ul>
</xsl:if>
```


