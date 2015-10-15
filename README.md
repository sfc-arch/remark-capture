# remark-capture
PhantomJS Script in order to create slide images from remark.js slides.

## Usage

### 1. Install PhantomJS

```bash
$ brew install phantomjs
```

### 2. Run program with the URL and page number

```bash
$ phantomjs capture.js 'http://localhost:3000/slide.html' 10
```

Images are shown like `capture_<page number>.png`
