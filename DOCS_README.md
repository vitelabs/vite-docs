# Documentation Build Workflow

The documentation is hosted in [vite-docs](https://github.com/vitelabs/vite-docs/tree/master) and published to https://docs.vite.org/.

## How It Works

A GitHub action is used for documentation deployment. New changes pushed to the master branch of the github repository will automatically be deployed

## README.MD

[README.MD](./README.md) is used as the landing page in each directory. 

## Config.js

The [config.js](.vuepress/config.js) generates the sidebar and table of contents. Auto sidebar is enabled, so there is no need to set up the sidebar separately. 

## Markdown configuration

Markdown files can contain optional YAML frontmatter. Several properties are used:

```
---
# title is displayed in the sidebar
title: Title of the file
# order specifies file's priority in the sidebar
order: 2
# parent is readme.md or index.md parent directory
parent:
  title: Directory title
  order: 1
---
```

Setting `order: false` will remove the item (file or directory) from the sidebar. It is valid to use a `readme.md` to set an order of the parent directory and hide the file with `order: false`.

## Links

Use relative path for links.

Such as:

```
[LINK](./README.md)
```
It works as follow:

[LINK](./README.md)

## Directory Structure with Images

If you have image or other asset to link, put the asset nearly by the file, then link to it with relative path.

Such as:

```
- test.md
- test.png
```

If one file needs link to multiply assets, put the assets in a folder that follows the same file name.

For example:

```
- test.md
- test
   - test-01.png
   - test-02.png
   - test-03.png
```

If one doc directory contain many files and assets, put all assets into a folder named `assets`.

For example:

```
- test1.md
- test2.md
- test3.md
- test4.md
- test5.md
- assets
   - test1
      - test1-01.png
      - test1-02.png
      - test1-03.png
   - test2
      - test2-01.png
      - test2-02.png
      - test2-03.png
   - test3
      - test3-01.png
      - test3-02.png
      - test3-03.png
```

Here is a real example: https://github.com/vitelabs/vite-docs/tree/master/articles

All images in `articles` directory are stored in `articles/assets` directory.

## Running Locally

Run the following commands:

```sh
rm -rf node_modules
```

This command will remove old version of the visual theme and required packages. This step is optional.

```sh
yarn install
```

Install the theme and all dependencies.

```sh
yarn run dev
```

To build documentation as static website, run `yarn run build`. The built files are stored in `.vuepress/dist` directory.
