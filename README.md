SMS Gulp Wrapper
================

## Requirement

```bash
npm install gulp -g
npm install gulp gulp-sms
```

## Usage

Write your **gulpfile.js** as below.

```js
require('gulp-sms')(require('gulp'), [
    {
        type: 'less',
        paths: {
            include: [
                __dirname + '/path/to/css/*.less'
            ],
            exclude: [
                __dirname + '/path/to/css/_*.less'
            ]
        },
        dest: {
            type: 'normal',
            dir: __dirname + '/path/to/css'
        }
    }
]);
```

## Less Configuration

### Normal Configuration

The configuration will convert less files listed in `paths.include`, and output each css file into the specific directory `dest.dir`.

The files listed in the `paths.exclude` will not be converted by less compiler.

```js
var configs = [
	{
		type: 'less',
		paths: {
			include: [
				__dirname + '/path/to/css/*.less'
			],
			exclude: [
				__dirname + '/path/to/css/_*.less'
			]
		},
		dest: {
			type: 'normal',
			dir: __dirname + '/path/to/css'
		}
	}
];
```

### Single File Configuration

The configuration will convert less files listed in `paths.include`, and output only one css file `dest.filename` in the specific directory `dest.dir`.

The files listed in the `paths.exclude` will not be converted by less compiler.

```js
var configs = [
	{
		type: 'less',
		paths: {
			include: [
				__dirname + '/path/to/css/*.less'
			],
			exclude: [
				__dirname + '/path/to/css/_*.less'
			]
		},
		dest: {
			type: 'single-file',    // 'normal', 'single-file'
			dir: __dirname + '/path/to/css',
			filename: 'screen.css'  // use only in type 'single-file'
		}
	}
];
```
