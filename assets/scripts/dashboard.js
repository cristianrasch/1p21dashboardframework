// function generate(config) {
// 	return new Promise((resolve, reject) => {
// 	  fetch("./template.hbs")
// 		.then(function(response) {
// 		  console.log(response);
// 		  return response.text();
// 		})
// 		.then(function(source) {
// 		  const template = Handlebars.compile(source);
// 		  const html = template(config);
// 		  resolve(html);
// 		});
// 	});
//   }



window.jQuery && jQuery.noConflict();
(function($,fw,window){
	//1p21 shit
	var _1p21 = window._1p21 || {};

	//dashboard shit
	_1p21.db = _1p21.db || {};
	
	fw.trumbowyg.defaults = {
		btns: [
			['viewHTML'],
			['strong', 'em',],
			['insertImage'],
			['link'],
			['unorderedList', 'orderedList'],
			['upload'],
			['fullscreen']
		],
		// svgPath:false,
		// hideButtonTexts:true,
		removeformatPasted: true,
		tbwresize: true,
		tagsToRemove: ['script']
	}

	//toggle our boi
	$('body').on('click','.dashboard-sidenav-toggle',function(e){	
		e.preventDefault();	
		console.log('hola bitchacho');	
		$(this).toggleClass('open')
		$('#dashboard-block-sidebar').toggleClass('open');	
	});

	// @TODO kwan sort table scriptoboi goes here with .dashboard-sort-table-toggle

	window._1p21 = _1p21;


	// $(function(){
		

		$('body').on('click', '*', function(e) {
			// e.preventDefault();
			console.log(e.target);
			console.log('yeet');
		  });
	// });

	// fw.addEvent(document.body,'click',function(e){
	// 	console.log('yeet');
	// })
	

}(jQuery,frameWork,window));

console.log('yaon si kuya');



// jQuery('body').on({
// 	click: function(e){
// 		// console.log('yeet');
// 		console.log(e.target)
// 	},
// 	mouseenter: function(e){ console.log('mouseenter',e.target) },
// 	mouseleave: function(e){ console.log('mouseleave',e.target) },
// }
// // ,'a.js-client-opt'
// );