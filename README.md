
# Snippets

## Table of Content

* [XSLT - The basics](xslt/basics.md)
    * [Variable](xslt/basics.md#variable)
    * [If and Choose](xslt/basics.md#if-and-choose)
    * [Display text and values with `value-of` element](xslt/basics.md#display-text-and-values-with-value-of-element)
    * [For-each](xslt/basics.md#for-each)
    * [Debuging](xslt/basics.md#debuging)

## Repo structure

```
Snippets/
├── css/
│   ├── animations.md
│   ├── css3.md
│   └── less.md
├── html/
│   ├── html5.md
│   └── social-meta-tags.md
├── js/
│   ├── jquery.md
│   └── validation.md
├── sgv/
│   ├── accessibility.md
│   ├── lisa.md
│   ├── readme.md
│   └── tools-and-links.md
├── xslt/
│   ├── defaults/
│   │   ├── files/
│   │   │   ├── newsitem.html
│   │   │   └── newslist.html
│   │   ├── newsitem.md
│   │   └── newslist.md
│   ├── advanced.md
│   ├── basics.md
│   ├── carousel.md
│   └── paging.md
└── readme.md
```


## How to contribute

1. Clone the repo with this command `git clone https://github.com/h5bp/html5-boilerplate.git`
2. Make your changes, commit and push to the repo


## Tips when you make your contribution


### Locally preview your markdown, Github style 

To preview your markdown before each commit I recommend [greadme](https://www.npmjs.com/package/greadme).

To install it tough npm you need to have NodeJS and you can get it here: http://nodejs.org

After install NodeJS you can use this command in cmd:
```
$ npm install -g greadme
```

This install it globally so you can always start it on a .md or .markdown files using this command:
```
$ greadme [path/to/some.markdown]
```

After that the site to `http://localhost:8124/` will start on your default browser and you stop the process by pressing CTRL+C in the cmd

**Plus**: Here is a [Markdown-Cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) if you are not familiar with markdown syntax.

