
const clickOnSeeMoreButton = (leftSideBar) => {
	const seeMoreButton = leftSideBar.getElementsByClassName('_y-c')[0];
	if (seeMoreButton) {
		seeMoreButton.parentNode.click();
	}
};



const workLoop = () => {
	const fbDom = document;
	const leftSideBar = fbDom.getElementById('leftCol') || document.createElement('div');
	const fbFeed = fbDom.querySelectorAll('[role="feed]')[0] || document.createElement('div');
	const suggestedBar = fbDom.getElementById('pagelet_ego_pane') || document.createElement('div');
	const rightPanel = fbDom.getElementsByClassName('fbChatSidebar')[0] || document.createElement('div');

	const methods = new DeleteMethodList();
	const calledFunction = {
		clickOnSeeMoreButton: () => clickOnSeeMoreButton(leftSideBar),
		removeGames: () => removeGames(),
		removeExplore: () => methods.removeExplore(RemoveFromExplore)
	};

	Object.keys(calledFunction).forEach(key => {
		try {
			calledFunction[key]();
		} catch (err) {
			console.log(`error in: ${key}`);
			console.log(`for more details: \n${err}`);
		}
	});
};
window.addEventListener('unload', () => workLoop());
document.body.addEventListener('load', () => workLoop());
document.body.addEventListener('DOMSubtreeModified', () => workLoop(), false);










// ==UserScript==
// @name            Facebook Ad Filter ++
// @description:en  Filter for content on facebook.
// @namespace       http://www.facebook.com/*
// @include         https://www.facebook.com/*
// @version         2.2
// @description Filter for content on facebook.
// ==/UserScript==

(function () {
	function contains(selector, text) {
		var elements = document.querySelectorAll(selector);
		return [].filter.call(elements, function (element) {
			return RegExp(text).test(element.textContent);
		});
	}
	function filterlogic() {
		var els = contains('div[id^=hyperfeed_story_id]', 'Suggested Post');
		for (var el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=hyperfeed_story_id]', 'Sponsored');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=hyperfeed_story_id]', 'People You May Know');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=hyperfeed_story_id]', 'Create Ad');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=hyperfeed_story_id]', 'SUGGESTED PAGES');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=pagelet_advertiser_panel]', '');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=pagelet_rhc_ticker_card]', '');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=pagelet_ego_pane]', '');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=createNav]', '');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=appsNav]', '');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=pagelet_rhc_footer]', '');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('a[id^=findFriendsNav]', '');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('a[data-testid^=contextual_help_jewel_button]', '');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=pagelet_reminders]', '');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=pagelet_feed_variety]', '');
		for (el in els) {
			els[el].outerHTML = '';
		}
		els = contains('div[id^=pagelet_on_tv_rhc]', '');
		for (el in els) {
			els[el].outerHTML = '';
		}
	}
	document.body.addEventListener('load', filterlogic);
	document.body.addEventListener('DOMSubtreeModified', filterlogic, false);
}) ();


// ==UserScript==
// @name         Facebook unsponsored
// @namespace    http://tampermonkey.net/
// @version      1.10.4
// @description  Block Facebook news feed "sponsored" posts
// @author       solskido
// @supportURL   https://greasyfork.org/en/scripts/22210-facebook-unsponsored/feedback
// @match        https://www.facebook.com/*
// @run-at       document-idle
// @grant        none
//
// Thanks to: enm, Mathieu
//
// ==/UserScript==

(function() {
	'use strict';
	// Selectors
	var streamSelector = 'div[id^="topnews_main_stream"]';
	var storySelector = 'div[id^="hyperfeed_story_id"]';
	var searchedNodes = [{
		// Sponsored
		'selector': [
			'.fbUserPost span > div > a:not([title]):not([role]):not(.UFICommentActorName):not(.uiLinkSubtle):not(.profileLink)'
		],
		'content': {
			'af':      ['Geborg'],
			'am':      ['የተከፈለበት ማስታወቂያ'],
			'ar':      ['إعلان مُموَّل'],
			'as':      ['পৃষ্ঠপোষকতা কৰা'],
			'ay':      ['Yatiyanaka'],
			'az':      ['Sponsor dəstəkli'],
			'be':      ['Рэклама'],
			'bg':      ['Спонсорирано'],
			'br':      ['Paeroniet'],
			'bs':      ['Sponzorirano'],
			'bn':      ['সৌজন্যে'],
			'ca':      ['Patrocinat'],
			'co':      ['Spunsurizatu'],
			'cs':      ['Sponzorováno'],
			'cx':      ['Giisponsoran'],
			'cy':      ['Noddwyd'],
			'da':      ['Sponsoreret'],
			'de':      ['Gesponsert'],
			'el':      ['Χορηγούμενη'],
			'en':      ['Sponsored', 'Chartered'],
			'es':      ['Publicidad', 'Patrocinado'],
			'fi':      ['Sponsoroitu'],
			'fr':      ['Commandité', 'Sponsorisé'],
			'gx':      ['Χορηγούμενον'],
			'hi':      ['प्रायोजित'],
			'hu':      ['Hirdetés'],
			'id':      ['Bersponsor'],
			'it':      ['Sponsorizzata'],
			'ja':      ['広告'],
			'jv':      ['Disponsori'],
			'kk':      ['Демеушілік көрсеткен'],
			'km':      ['បានឧបត្ថម្ភ'],
			'lo':      ['ໄດ້ຮັບການສະໜັບສະໜູນ'],
			'mk':      ['Спонзорирано'],
			'ml':      ['സ്പോൺസർ ചെയ്തത്'],
			'mn':      ['Ивээн тэтгэсэн'],
			'mr':      ['प्रायोजित'],
			'ms':      ['Ditaja'],
			'ne':      ['प्रायोजित'],
			'nl':      ['Gesponsord'],
			'or':      ['ପ୍ରଯୋଜିତ'],
			'pa':      ['ਸਰਪ੍ਰਸਤੀ ਪ੍ਰਾਪਤ'],
			'pl':      ['Sponsorowane'],
			'pt':      ['Patrocinado'],
			'ru':      ['Реклама'],
			'sa':      ['प्रायोजितः |'],
			'si':      ['අනුග්‍රහය දක්වන ලද'],
			'so':      ['La maalgeliyey'],
			'sv':      ['Sponsrad'],
			'te':      ['స్పాన్సర్ చేసినవి'],
			'th':      ['ได้รับการสนับสนุน'],
			'tr':      ['Sponsorlu'],
			'tz':      ['ⵉⴷⵍ'],
			'uk':      ['Реклама'],
			'ur':      ['تعاون کردہ'],
			'vi':      ['Được tài trợ'],
			'zh-Hans': ['赞助内容'],
			'zh-Hant': ['贊助']
		}
	}, {
		// Suggested Post
		'selector': [
			'.fbUserPost div > div > span > span'
		],
		'content': {
			'af':        ['Voorgestelde Plasing'],
			'am':        ['የሚመከር ልጥፍ'],
			'ar':        ['منشور مقترح'],
			'as':        ['পৰামৰ্শিত প\'ষ্ট'],
			'az':        ['Təklif edilən yazılar'],
			'be':        ['Прапанаваны допіс'],
			'bg':        ['Предложена публикация'],
			'bn':        ['প্রস্তাবিত পোস্ট'],
			'br':        ['Embannadenn aliet'],
			'bs':        ['Predloženi sadržaj'],
			'ca':        ['Publicació suggerida'],
			'co':        ['Posti cunsigliati'],
			'cs':        ['Navrhovaný příspěvek'],
			'cx':        ['Gisugyot nga Pagpatik'],
			'cy':        ['Neges a Awgrymir'],
			'da':        ['Foreslået opslag'],
			'de':        ['Vorgeschlagener Beitrag'],
			'el':        ['Προτεινόμενη δημοσίευση'],
			'en':        ['Suggested Post', 'Reccomended fer ye eye'],
			'es':        ['Publicación sugerida'],
			'fi':        ['Ehdotettu julkaisu'],
			'fr':        ['Publication suggérée'],
			'gx':        ['Παϱαινουμένη Ἔκϑεσις'],
			'hi':        ['सुझाई गई पोस्ट'],
			'hu':        ['Ajánlott bejegyzés'],
			'it':        ['Post consigliato'],
			'id':        ['Saran Kiriman'],
			'ja':        ['おすすめの投稿'],
			'jv':        ['Kiriman sing Disaranake'],
			'kk':        ['Ұсынылған жазба'],
			'km':        ['ការប្រកាសដែលបានណែនាំ'],
			'ko':        ['추천 게시물'],
			'lo':        ['ໂພສຕ໌ແນະນຳ', 'ຜູ້ສະໜັບສະໜູນ'],
			'mk':        ['Предложена објава'],
			'ml':        ['നിർദ്ദേശിച്ച പോ‌സ്റ്റ്'],
			'mn':        ['Санал болгосон нийтлэл'],
			'mr':        ['सुचवलेली पोस्ट'],
			'ms':        ['Kiriman Dicadangkan'],
			'ne':        ['सुझाव गरिएको पोस्ट'],
			'nl':        ['Voorgesteld bericht'],
			'or':        ['ପ୍ରସ୍ତାବିତ ପୋଷ୍ଟ'],
			'pa':        ['ਸੁਝਾਈ ਗਈ ਪੋਸਟ'],
			'pl':        ['Proponowany post'],
			'pt':        ['Publicação sugerida'],
			'ru':        ['Рекомендуемая публикация'],
			'sa':        ['उपॆक्षित प्रकटनं'],
			'si':        ['යෝජිත පළ කිරීම'],
			'so':        ['Bandhig la soo jeediye'],
			'sv':        ['Föreslaget inlägg'],
			'te':        ['సూచింపబడిన పోస్ట్'],
			'th':        ['โพสต์ที่แนะนำ'],
			'tr':        ['Önerilen Gönderiler', 'Önerilen Gönderi'],
			'tz':        ['ⵜⴰⵥⵕⵉⴳⵜ ⵉⵜⵜⵓⵙⵓⵎⵔⵏ'],
			'uk':        ['Рекомендований допис'],
			'ur':        ['تجویز کردہ مراسلہ'],
			'vi':        ['Bài viết được đề xuất'],
			'zh-Hans':   ['推荐帖子'],
			'zh-Hant':   ['推薦帖子', '推薦貼文']
		}
	}, {
		// Popular Live Video                                                      // A Video You May Like
		'selector': [
			'.fbUserPost div > div > div:not(.userContent)'
		],
		'exclude': function(node) {
			if(!node) {
				return true;
			}

			return (node.children && node.children.length);
		},
		'content': {
			'af':        ['Popular Live Video', 'Gewilde Live Video',              '\'n Video waarvan jy dalk sal hou'],
			'ar':        ['مباشر رائج'                                            ,'فيديو قد يعجبك'],
			'as':        ['Popular Live Video',                                    'আপুনি ভাল পাব পৰা এটা ভিডিঅ\''],
			'az':        ['Popular Live Video',                                    'Bu video sənin xoşuna gələ bilər'],
			'bg':        ['Популярно видео на живо',                               'Видео, което е възможно да харесате'],
			'bn':        ['জনপ্রিয় লাইভ ভিডিও',                                     'আপনার পছন্দ হতে পারে এমন একটি ভিডিও'],
			'br':        ['Video Siaran Langsung Populer',                         'Sebuah Video yang Mungkin Anda Suka'],
			'bs':        ['Video Siaran Langsung Populer',                         'Sebuah Video yang Mungkin Anda Suka'],
			'ca':        ['Video Siaran Langsung Populer',                         'Sebuah Video yang Mungkin Anda Suka'],
			'cs':        ['Populární živé vysílání',                               'Video, které by se vám mohlo líbit'],
			'cx':        ['Popular Live Video',                                    'Usa ka Video nga Mahimong Ganahan Ka'],
			'da':        ['Populær livevideo',                                     'En video, du måske vil synes godt om'],
			'de':        ['Beliebtes Live-Video',                                  'Ein Video, das dir gefallen könnte'],
			'en':        ['Popular Live Video',                                    'A Video You May Like'],
			'es':        ['Vídeo en directo popular', 'Video en vivo popular',     'Un video que te puede gustar', 'Un vídeo que te puede gustar'],
			'fi':        ['Suosittu live-video'],
			'fr':        ['Vidéo en direct populaire',                             'Une vidéo que vous pourriez aimer'],
			'hi':        ['लोकप्रिय लाइव वीडियो',                                     'वह वीडियो जो आपको पसंद हो सकता है'],
			'hu':        ['Népszerű élő videó',                                    'Egy videó, amely esetleg tetszik neked'],
			'it':        ['Video in diretta popolare',                             'Un video che potrebbe piacerti'],
			'id':        ['Video Siaran Langsung Populer',                         'Sebuah Video yang Mungkin Anda Suka'],
			'ja':        ['人気ライブ動画',                                         'おすすめの動画'],
			'jv':        ['Video Siaran Langsung Populer',                         'Video sing Menawa Sampeyan Seneng'],
			'kk':        ['Popular Live Video',                                    'A Video You May Like'],
			'km':        ['Popular Live Video',                                    'វីដេអូ​ដែល​អ្នក​ប្រហែល​ជាចូលចិត្ត'],
			'ko':        ['인기 라이브 방송',                                       '회원님이 좋아할 만한 동영상'],
			'lo':        ['Popular Live Video',                                    'A Video You May Like'],
			'mk':        ['Popular Live Video',                                    'Видео кое можеби ќе ти се допадне'],
			'ml':        ['ജനപ്രിയ Live വീഡിയോ',                             'നിങ്ങൾക്ക് ഇഷ്‌ടമാകാനിടയുള്ള ‌വീഡിയോ'],
			'mn':        ['Popular Live Video',                                    'Танд таалагдаж магадгүй бичлэг'],
			'mr':        ['प्रसिद्ध थेट व्हिडिओ',                                        'एक व्हिडिओ जो कदाचित आपल्याला आवडू शकतो'],
			'ms':        ['Video Live Popular',                                    'Video Yang Anda Mungkin Suka'],
			'ne':        ['Popular Live Video',                                    'तपाईंले मन पराउन सक्ने भिडियो'],
			'nl':        ['Populaire livevideo',                                   'Een video die je misschien leuk vindt', 'Een video die je wellicht leuk vindt'],
			'or':        ['Popular Live Video',                                    'ଏକ ଭିଡିଓ ଆପଣ ହୁଏତ ଲାଇକ୍ କରିପାରନ୍ତି'],
			'pa':        ['ਪ੍ਰਸਿੱਧ ਲਾਈਵ ਵੀਡੀਓਜ਼',                                      'ਕੋਈ ਵੀਡੀਓ ਜੋ ਸ਼ਾਇਦ ਤੁਹਾਨੂੰ ਪਸੰਦ ਹੋਵੇ'],
			'pl':        ['Popularna transmisja wideo na żywo',                    'Film, który może Ci się spodobać'],
			'pt':        ['Vídeo em direto popular', 'Vídeo ao vivo popular',      'Um vídeo de que talvez gostes', 'Um vídeo que você talvez curta'],
			'ru':        ['Популярный прямой эфир',                                'Вам может понравиться это видео'],
			'sa':        ['Popular Live Video',                                    'A Video You May Like'],
			'si':        ['Popular Live Video',                                    'ඔබ කැමති විය හැකි වීඩියෝවක්'],
			'so':        ['Popular Live Video',                                    'A Video You May Like'],
			'te':        ['ప్రసిద్ధ ప్రత్యక్ష ప్రసార వీడియో',                            'మీకు నచ్చే వీడియో'],
			'th':        ['Popular Live Video',                                    'วิดีโอที่คุณอาจจะถูกใจ'],
			'tr':        ['Popular Live Video',                                    'Hoşuna Gidebilecek Bir Video'],
			'uk':        ['Popular Live Video',                                    'Відео, яке може вам сподобатися'],
			'ur':        ['Popular Live Video',                                    'ویڈیو جو شائد آپ کو پسند آئے'],
			'vi':        ['Video trực tiếp phổ biến',                              'Một video bạn có thể thích'],
			'zh-Hans':   ['热门直播视频',                                           '猜你喜欢'],
			'zh-Hant':   ['熱門直播視訊', '熱門直播視像',                            '你可能會喜歡的影片', '你可能會喜歡的影片']
		}
	}];

	var language = document.documentElement.lang;
	var nodeContentKey = (('innerText' in document.documentElement) ? 'innerText' : 'textContent');
	var mutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver;

	// Default to 'en' when the current language isn't yet supported
	var i;
	for(i = 0; i < searchedNodes.length; i++) {
		if(searchedNodes[i].content[language]) {
			searchedNodes[i].content = searchedNodes[i].content[language];
		}
		else {
			searchedNodes[i].content = searchedNodes[i].content.en;
		}
	}

	var body;
	var stream;
	var observer;

	function block(story) {
		if(!story) {
			return;
		}

		story.remove();
	}

	function isSponsored(story) {
		if(!story) {
			return false;
		}

		var nodes;
		var nodeContent;

		var typeIterator;
		var selectorIterator;
		var nodeIterator;
		var targetIterator;
		for(typeIterator = 0; typeIterator < searchedNodes.length; typeIterator++) {
			for(selectorIterator = 0; selectorIterator < searchedNodes[typeIterator].selector.length; selectorIterator++) {
				nodes = story.querySelectorAll(searchedNodes[typeIterator].selector[selectorIterator]);
				for(nodeIterator = 0; nodeIterator < nodes.length; nodeIterator++) {
					nodeContent = nodes[nodeIterator][nodeContentKey];
					if(nodeContent) {
						for(targetIterator = 0; targetIterator < searchedNodes[typeIterator].content.length; targetIterator++) {
							if(searchedNodes[typeIterator].exclude && searchedNodes[typeIterator].exclude(nodes[nodeIterator])) {
								continue;
							}

							if(nodeContent.trim() == searchedNodes[typeIterator].content[targetIterator]) {
								return true;
							}
						}
					}
				}
			}
		}

		return false;
	}

	function process() {
		// Locate the stream every iteration to allow for FB SPA navigation which
		// replaces the stream element
		stream = document.querySelector(streamSelector);
		if(!stream) {
			return;
		}

		var stories = stream.querySelectorAll(storySelector);
		if(!stories.length) {
			return;
		}

		var i;
		for(i = 0; i < stories.length; i++) {
			if(isSponsored(stories[i])) {
				block(stories[i]);
			}
		}
	}

	if(mutationObserver) {
		body = document.querySelector('body');
		if(!body) {
			return;
		}

		observer = new mutationObserver(process);
		observer.observe(body, {
			'childList': true,
			'subtree': true
		});
	}
})();
