
# Installation
include the following files:

css/sass
*	[framework.scss](../../../scss/framework.scss)
	*	If you want to be a basic bitch just [framework.css](../../../dist/framework.css) is super cool too :)

js files (in order)
*	Dependencies
	*	[jQuery](https://jquery.com/) (for trumbowyg support. sad. This will be expendable soon)
*	Optional
	*	[Trumbowyg](https://alex-d.github.io/Trumbowyg/)
*	[framework.js](../../../dist/framework.min.js) 
	*	Note: This script uses jQuery only for trumbowyg, the reset are vanilla. will be updated once vanilla trumbowyg version is released.
	*	If full on jQuery dependency is preferred, [framework.plugged.js](../../../dist/framework.plugged.js)

## File structure
*	Put this bitch boy wherever the fuq u want. 69/10 recommend the root folder

## HTML setup

...must look like this
```html

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<title>Title</title>

	<!-- styles -->
		<!-- framework -->
			<link href="framework/dist/framework.css" rel="stylesheet">
		<!-- your styles -->
			<link href="/style.css" rel="stylesheet">
	</head>
	<body class="body-loading"">

		<!-- blahblahblah -->


		<!-- jquery -->
			<script src="//ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
		<!-- trumboboi -->
			<script src="https://cdnjs.cloudflare.com/ajax/libs/Trumbowyg/2.19.1/trumbowyg.min.js"></script>

		<!-- framework -->
			<script src="framework/dist/framework.js"></script>

		<!-- ya custom js -->
			<script src="/site.js"></script>
	</body>
</html>


```

and done

# Body Classes

There are classes for our bod to be aware of

## **`.body-loading`**

While javascript is initialized. some modules are at opacity: 0; while this is there. Add this to your html so shit can happen

## **`.body-loaded`**

When bitch is ready. JS adds this shit, you don't have to fuck with it

## **`.theme-inverse`**

This switches color or background properties to allow dark mode

## **`.body-modal-active`**

Disables overflow scroll on the bod so user can focus on the active [modal](../components/modal.md). JS adds this shit, you don't have to fuck with it

## **`.body-nav-sticky-offset`**

Offsets the body to the set height of the [nav](../components/nav.md)




[Back to TOC](../../../readme.md)