import { BiHeart, BiTrendingUp } from 'react-icons/bi';
import { FiCodesandbox, FiGrid, FiUsers } from 'react-icons/fi';
import { AnyAction } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { IData } from '../interfaces/redux.state';
import { createCommunityTag, createTag, setActiveMenu, setDapplets, setDrag, setTags } from './actions';

export const menuIcons = {
	0: <FiCodesandbox size={24} />,
	1: <BiHeart size={24} />,
	2: <FiGrid size={24} />,
	3: <FiUsers size={24} />,
	4: <BiTrendingUp size={24} />,
};

const initialState: IData = {
	menu: [
		{ id: 0, name: 'All Dapplets' },
		{ id: 1, name: 'Editor’s Choice' },
		{ id: 2, name: 'Essential Dapplets' },
		{ id: 3, name: 'Social Networks' },
		{ id: 4, name: 'Financial Dapplets' }
	],
	activeMenu: 0,
	myList: [
		{ id: 0, title: 'TOP-10 Twitter Dapplets', link: 'https://greatchat.ru/twitter/reyting-tvittera-top10', author: 'Me' },
		{ id: 1, title: 'Best Financial dapplets by Jack', link: 'https://www.youtube.com/watch?v=BG3DIqg3dtY', author: 'Jack' },
		{ id: 2, title: 'TOP-10 Twitter Dapplets', link: 'https://greatchat.ru/twitter/reyting-tvittera-top10', author: 'Me' },
	],
	tags: [],
	communityTags: [
		{ id: '0', name: 'Social' },
		{ id: '1', name: 'Top 100' },
		{ id: '2', name: 'Testing' },
		{ id: '3', name: 'Favourites' },
	],
	dapplets: [
		{
			id: '89c33b4f-aaf2-448c-8942-a20e9163af47',
			icon: '-j4bFGaqnAHkt8u-hKAlnZx_R6n6xTLZEk9qwcfwBiLUIXOuOec-km6O4jsnyCfdBoo.webp',
			title: 'HYPED - soziales Netzwerk',
			author: 'Hyped Ventues',
			rating: 3.1,
			address: '0x8146d75181de2cab3f35e3b2fced86c77d7c073f',
			released: '2020-11-26T21:09:50.676Z',
			downloads: 38419,
			description: 'In such cases as generally it a pleasure more or less bit by bit, I ',
			text_1: 'A pleasure in such cases tuned the sky all. Above this happened. To the color of television. As generally from various people a pleasure to, was a dead channel. In such cases in such cases and as generally as generally it, was, in such cases from various people bit by bit a pleasure the color of television a pleasure a dead channel it a pleasure the story the color of television. All was the story each time was the port tuned the port had a different story more or less ',
			text_2: 'Above, happens I ',
			text_3: 'Bit by bit, ',
			text_4: 'The port the color of television, ',
			text_5: '',
			text_6: 'Each time, the sky ',
			text_7: '',
			text_8: 'As generally, bit by bit ',
			text_9: 'Had the sky happens a dead channel, ',
			tags: [
				'6'
			]
		},
		{
			id: 'ac025121-89aa-41d2-88fc-4c7c8c1743cc',
			icon: 'qr_Gk5aayZOfwWcL3JpgiaJ2hl85nqqxiDaV59g71W0ehjXQVjYfNHAHYoEAAXi9zA.webp',
			title: '♔ Fontise Font Maker Keyboard Tips - Stylish Fonts',
			author: 'studioNOguides',
			rating: 1.2,
			address: '0x4e05e9b9ffcd26381ace32b7c535594bd4865515',
			released: '2021-01-02T17:27:41.299Z',
			downloads: 137020,
			description: 'A pleasure, a dead channel it had ',
			text_1: 'Was tuned tuned happens above above, and, a pleasure all had to to the story the sky in such cases, it the color of television a dead channel to the port as generally the sky was was, all and a pleasure I had, this happened, it the port a different story the color of television this happened a different story was ',
			text_2: 'The port ',
			text_3: 'Was ',
			text_4: 'All ',
			text_5: 'I burn ',
			text_6: 'It. ',
			text_7: 'Tuned. Each time ',
			text_8: 'More or less ',
			text_9: 'To a pleasure ',
			tags: []
		},
		{
			id: 'c01dabe7-8e5e-43b5-a9f4-4e09d10e54a1',
			icon: '7q4NadpVfuGhYuxSOEQkTw3w53XH0IFZUlADRXgSmpZFzdvMm3br_e1ukzLecJb-bRs.webp',
			title: 'RoKKr TV App Guide',
			author: 'Star Pro',
			rating: 3.6,
			address: '0xa4730c3c37b1a62e6512e254342d8fa0f8df126d',
			released: '2021-01-11T05:11:12.811Z',
			downloads: 882631,
			description: 'Above bit by bit. This happened a different story above had a different story a different story. Bit by bit ',
			text_1: 'A pleasure all it. A pleasure, each time bit by bit all, to had to from various people, was this happened, happens this happened to, and and the color of television burn burn. The port this happened, it, a pleasure. Was was a different story to in such cases, all was, tuned burn a pleasure above it burn more or less a pleasure. The story ',
			text_2: 'Burn ',
			text_3: '',
			text_4: '',
			text_5: 'In such cases. Bit by bit ',
			text_6: 'I had a dead channel ',
			text_7: '',
			text_8: 'It, ',
			text_9: 'The sky ',
			tags: [
				'0',
				'2',
				'5',
				'7'
			]
		},
		{
			id: '2aeffd4b-17bf-4c93-a2ac-7e8d481c22aa',
			icon: 'IhsU4nT3RFvuJEsIxWinnmfPb-UVv51Aoql0Wzl6Vz0PBG2poGukVkywz-usXJIVyoM.webp',
			title: 'نتائج اختبارات الطلاب في سوريا',
			author: 'Abdallah57',
			rating: 4.3,
			address: '0x0ff97478c02be80ee9fbbd3c2e30dc5d56e2e0e0',
			released: '2021-01-06T03:39:11.138Z',
			downloads: 528837,
			description: 'All. A dead channel more or less ',
			text_1: 'I was in such cases this happened, was it was was I to the sky bit by bit a dead channel I. The sky it, the port. ',
			text_2: 'The story a pleasure, it ',
			text_3: 'From various people. Each time ',
			text_4: 'A different story above was ',
			text_5: 'Was all a pleasure. The story ',
			text_6: 'A pleasure, ',
			text_7: 'It as generally ',
			text_8: 'To to ',
			text_9: '',
			tags: [
				'4'
			]
		},
		{
			id: '1aff0f7d-b992-4214-9778-19ec9b4d20cf',
			icon: 'aWCZGM5hGC6iiJWSWgjEZAi8z1xk_Zx4EloPawmh2hdOYBQuX6KIludRiT3MCusgpw.webp',
			title: 'Grüner Pass',
			author: 'BRZ GmbH',
			rating: 3.7,
			address: '0xd675a4b996f6b73918278232c9b4e4c7c2202a25',
			released: '2021-07-01T09:08:24.231Z',
			downloads: 330736,
			description: 'Above ',
			text_1: 'The story bit by bit ',
			text_2: 'And it ',
			text_3: 'Had, bit by bit all ',
			text_4: 'The color of television ',
			text_5: 'The sky ',
			text_6: '',
			text_7: '',
			text_8: 'It ',
			text_9: 'All was in such cases ',
			tags: [
				'6',
				'3'
			]
		},
		{
			id: 'a1f0170c-964d-4935-89e6-d3e6358c9cca',
			icon: 'DB8SYIQ9xvKX-R0tyded2qDuq0JWG6_96YDOPwbN3TZ00eTgLvK7oq-DlDXIKdALPRPQ.webp',
			title: 'Water Resistance Tester',
			author: 'Ray W',
			rating: 3.6,
			address: '0x14ccc87850266f76258226e7bfedb9312c21a3a7',
			released: '2020-09-29T01:41:21.529Z',
			downloads: 655694,
			description: 'This happened was a dead channel the port, a pleasure as generally the port each time was. All the color of television ',
			text_1: 'Happens this happened above. From various people the story bit by bit the port the sky. Was from various people this happened as generally burn more or less it the story was, tuned to all. Each time was. All, happens was burn, to was it the color of television tuned. The sky was the story it it the story to tuned this happened, and the sky. The sky a different story the story the port a dead channel, ',
			text_2: '',
			text_3: 'It ',
			text_4: 'It. ',
			text_5: 'This happened bit by bit ',
			text_6: 'It it. ',
			text_7: '',
			text_8: '',
			text_9: 'Happens above the color of television. ',
			tags: [
				'3'
			]
		},
		{
			id: '13841153-cf83-4de9-8f2a-3a9f01bac92d',
			icon: 'd8j_XKP49QDGFJ_aTNkdY5GsgUdgS9wk0xD5Pz-YtZDKJP6vBuyRH9mXLMYMbnWSmRA.webp',
			title: 'Freie Demokraten',
			author: 'Freie Demokraten',
			rating: 4.5,
			address: '0x11d34c18d6e5e06284802992236d66311fef6337',
			released: '2021-02-24T07:12:25.764Z',
			downloads: 15062,
			description: 'It to, as generally. Was to a different story and. A dead channel was. ',
			text_1: 'It burn it above was it a pleasure more or less in such cases more or less bit by bit from various people to, the story above it each time, it a dead channel as generally bit by bit. It from various people a pleasure the color of television a pleasure a pleasure the port this happened a pleasure ',
			text_2: 'It a different story ',
			text_3: 'The color of television more or less ',
			text_4: 'Burn to the story, to ',
			text_5: 'A pleasure. The color of television ',
			text_6: '',
			text_7: 'This happened the port and ',
			text_8: 'A different story from various people ',
			text_9: 'From various people above ',
			tags: [
				'6',
				'4',
				'3'
			]
		},
		{
			id: '729fe83a-be17-4ebd-adbf-cb72722e73c5',
			icon: 'vsUZUaLoptj_P92s56WuOV8KPPcehdNdruhA0wAttCY9QTeZokeomQro2p8mD-E-pg.webp',
			title: 'Wobbly Life Stick Ragdoll walkthrough guide 2021',
			author: 'CSLearnPortal',
			rating: 2.2,
			address: '0x11f3940bb527a7f076762c0d9272fb5ad07ab8b5',
			released: '2021-07-12T08:50:08.489Z',
			downloads: 117396,
			description: 'All a dead channel the color of television had from various people was ',
			text_1: 'Above was a dead channel a dead channel it was a different story, more or less the port to, as generally it the story bit by bit the story the sky burn I this happened. Was had the sky more or less a dead channel. From various people all to the story it a dead channel above tuned was a different story I, the sky all happens this happened to a different story it all all, bit by bit the color of television had to, it ',
			text_2: 'From various people ',
			text_3: 'To all, it, happens ',
			text_4: 'I, it, above, to the sky, ',
			text_5: 'The color of television. ',
			text_6: 'This happened tuned ',
			text_7: 'Was above all the color of television ',
			text_8: 'I it. I ',
			text_9: 'A pleasure I as generally, ',
			tags: [
				'8',
				'3',
				'1',
				'5'
			]
		},
		{
			id: '75c92474-edd7-4d54-9935-354bea9013b7',
			icon: '5KpaQHzxcOPFYTiSJfTj6__Tn_IO3Q54e4NGy2QF66hkYyWZAjRtAWxJz-ekAHIjuTk.webp',
			title: 'E-Rezept',
			author: 'gematik',
			rating: 3.6,
			address: '0xfda3d660f4788b4ccb88f8586e424375f51b6522',
			released: '2020-11-18T15:35:00.145Z',
			downloads: 17195,
			description: 'This happened from various people ',
			text_1: 'Burn a pleasure, it, happens a different story the sky more or less. All burn to. The sky ',
			text_2: 'It ',
			text_3: 'A different story tuned ',
			text_4: 'Was a dead channel ',
			text_5: 'This happened bit by bit ',
			text_6: '',
			text_7: 'Was, ',
			text_8: 'To. ',
			text_9: 'The port tuned was. ',
			tags: []
		},
		{
			id: '2c5af281-30cb-4537-87d4-b2e444109799',
			icon: 'nTiuLRseu21HYqalBC7oxMFXvldxe_h0vspGDB1Y8s_lVWTVSRSaGG3UIwksmOrvNqY.webp',
			title: 'Fnmods Esp',
			author: 'Fnmods lnc',
			rating: 4.6,
			address: '0xf40e4b068d12e9662d1375880d57a5362fecdf3f',
			released: '2021-03-17T13:28:12.976Z',
			downloads: 222007,
			description: 'More or less. ',
			text_1: 'More or less more or less. To, I. Burn, to, in such cases, burn, a different story the sky had it bit by bit it, bit by bit. Tuned the sky all and a dead channel had, this happened the sky ',
			text_2: '',
			text_3: 'Happens. It to and a dead channel ',
			text_4: 'Each time. A pleasure ',
			text_5: 'I. It ',
			text_6: 'A dead channel. ',
			text_7: 'And each time was I ',
			text_8: 'Tuned ',
			text_9: 'Had was. Had each time ',
			tags: [
				'5',
				'4',
				'3'
			]
		},
		{
			id: 'c1010e45-fa00-4574-87fe-948bd1158d9c',
			icon: 'b_N6NX5_tgl5bRyO8zYPVC_cdmGllGGU7xufL7UWfMRzpj5UijHYLnB0CtlIQYIcAE4.webp',
			title: 'Abc Cam Scanner Pro',
			author: '90X Store',
			rating: 2.6,
			address: '0x0b8236cd9886a7410f54f4c2db976ddb55d2d521',
			released: '2021-02-01T13:43:25.881Z',
			downloads: 1350,
			description: 'The port the port was the story each time a pleasure I the color of television ',
			text_1: 'A dead channel the color of television was to I the port as generally this happened in such cases had. Burn bit by bit, this happened the color of television was the color of television was had the story above the story the story from various people. Was the color of television it more or less more or less ',
			text_2: 'And. Above ',
			text_3: 'Bit by bit ',
			text_4: 'Above ',
			text_5: 'Had. A dead channel, ',
			text_6: 'Each time. Was was ',
			text_7: 'Had it ',
			text_8: 'The sky was ',
			text_9: 'More or less ',
			tags: [
				'5',
				'1',
				'4'
			]
		},
		{
			id: 'a3d8772f-dc07-4f0a-b2b8-3fb5eca682f6',
			icon: 'vvs3hjs5pyxZ3ChF8X5aevBuftcmx5gljySvYEPuO08CI6661Lc2tYvF4XBDkzpSmnM.webp',
			title: 'AlwaysMine - Multi Crypto Cloud Mining',
			author: 'AlwaysMine Inc.',
			rating: 4.5,
			address: '0x2b748394bd64428b92f0677d2e1556e86faaba15',
			released: '2021-03-11T08:10:07.568Z',
			downloads: 899968,
			description: 'Happens, a different story was above a pleasure in such cases ',
			text_1: 'More or less bit by bit, was and above it to tuned. It in such cases a different story. Happens. The story each time a dead channel ',
			text_2: 'Was the port a dead channel ',
			text_3: 'It, the port ',
			text_4: '',
			text_5: 'A different story bit by bit, ',
			text_6: 'Bit by bit all ',
			text_7: 'The sky ',
			text_8: 'It it ',
			text_9: 'It the story the sky. ',
			tags: [
				'0',
				'2',
				'8',
				'4',
				'6'
			]
		},
		{
			id: '5e823ba3-fb4d-4fde-b543-f0620fa358b3',
			icon: 'u0fFctgKEiyX44LI9DZI4Gfa8u4XbtmxL7RE1QHZN9VHrdx-rFWtKTTNT7l7Tn613-Y.webp',
			title: '[ Senioren ] SOS Notruf App - Notfall Hilfe',
			author: 'LSN-Studios',
			rating: null,
			address: '0x1773cda4ee4065b2c7e055251812e4c7f9bc3878',
			released: '2021-04-20T13:13:29.994Z',
			downloads: 168351,
			description: 'Tuned ',
			text_1: 'The port above it I to to was, more or less more or less was each time a dead channel burn had it the port all above happens and it in such cases burn it, more or less. I. Each time was as generally all the color of television and from various people it the color of television ',
			text_2: 'And it all all ',
			text_3: 'The port ',
			text_4: 'From various people ',
			text_5: 'It the sky bit by bit ',
			text_6: 'To. All, and the port ',
			text_7: 'A dead channel. ',
			text_8: 'More or less, ',
			text_9: 'I, I ',
			tags: [
				'2',
				'4',
				'1'
			]
		},
		{
			id: '8b651fd4-4f36-4322-a045-8cc90cd7e3fa',
			icon: 'o8-TF-5LtgDk4wVLBMFKyobqafKui_vPoInQi0FJfrWFmFhZvUll4w7OqUy0dTDfjLA.webp',
			title: 'Fidget Trading 3D - Fidget Toys',
			author: 'MagicLab',
			rating: 4.1,
			address: '0xcc00dfcd451cddcf0f628ae1ea34c766435a3e01',
			released: '2021-05-05T05:25:37.368Z',
			downloads: 498680,
			description: 'A dead channel had, a pleasure, was, the color of television from various people, it burn to. ',
			text_1: 'To, was had the color of television had above was to burn happens was was burn this happened the story bit by bit as generally ',
			text_2: '',
			text_3: 'Bit by bit from various people ',
			text_4: '',
			text_5: 'To was each time happens, ',
			text_6: 'It had. Was this happened ',
			text_7: 'A different story. ',
			text_8: '',
			text_9: 'A different story ',
			tags: []
		},
		{
			id: '5859e245-88e1-466b-bd2d-a46c35ad67c0',
			icon: 'nEvNdVTcLP3F4JpPIxs-hXuAfKnIVdpuIEQB6_FOz0G_gP66phqUMCKST9OQZ-mPUq8.webp',
			title: 'Trading Master 3D - Fidget Pop',
			author: 'FollowCircles',
			rating: 4,
			address: '0x3e9bb8c720ea85aa011aab307c11b2b7a0f709bc',
			released: '2020-10-03T16:32:38.181Z',
			downloads: 111129,
			description: 'All I burn. Had the sky as generally was in such cases ',
			text_1: 'And, the story the story the color of television, this happened, it, each time to, above the color of television had as generally in such cases was was had, was above it this happened. A pleasure. Had the color of television from various people it. Bit by bit this happened and. The story, the color of television in such cases burn above, the story it each time happens this happened tuned burn burn, and the story I was. Tuned happens as generally the color of television had burn it this happened had ',
			text_2: 'And in such cases ',
			text_3: 'I. I ',
			text_4: '',
			text_5: '',
			text_6: 'In such cases ',
			text_7: 'Had ',
			text_8: 'A different story to a different story. ',
			text_9: '',
			tags: [
				'8'
			]
		},
		{
			id: '2421216e-959e-41a2-bf30-65d0e525c678',
			icon: '6tvkhmTkt90HLiZdUfkvcuzUe7VP1Hbq3iTcCiVYgOawz_r-RJlu2wHBxZtc19tyNFS_.webp',
			title: 'My Child Lebensborn LITE',
			author: 'Sarepta Studio',
			rating: 4.3,
			address: '0x7189054d30d2516ed5cf976273f1b696adbf3698',
			released: '2021-03-31T15:12:40.949Z',
			downloads: 419847,
			description: 'The sky, this happened burn, had, as generally. Was bit by bit each time, ',
			text_1: 'Was burn. This happened the color of television the color of television the color of television, the sky this happened each time was, from various people burn all. The story the color of television all tuned the sky tuned had, a dead channel was. And a dead channel, as generally. A dead channel the story was bit by bit above as generally it from various people a pleasure from various people tuned in such cases happens the sky, was tuned bit by bit a different story to a different story it burn it the sky, ',
			text_2: 'It ',
			text_3: 'The port ',
			text_4: 'More or less ',
			text_5: 'Was ',
			text_6: 'Was ',
			text_7: 'In such cases. Happens more or less ',
			text_8: '',
			text_9: 'The port ',
			tags: [
				'4',
				'7',
				'6'
			]
		},
		{
			id: 'abf46c02-6714-471b-917c-bed122ff0a4d',
			icon: 'KWpOO9_OK7vKel_pmwQihyxZY4texgiiFaWxWRJUMpt06IML55CNUzBJlItq-soQDw.webp',
			title: 'Elemental Master',
			author: 'Supersonic Studios LTD',
			rating: 4,
			address: '0xa43b258ca98988c027682b751d91e2aac7367457',
			released: '2020-09-06T07:42:03.586Z',
			downloads: 563611,
			description: 'Tuned, in such cases. All the color of television ',
			text_1: 'This happened the color of television, burn the story was tuned burn. This happened a dead channel above. A dead channel a pleasure above the port, to was and, to all more or less above. And the color of television was tuned the color of television, bit by bit it as generally to. Was more or less this happened, ',
			text_2: 'To ',
			text_3: 'The port ',
			text_4: 'Tuned. ',
			text_5: 'A pleasure ',
			text_6: 'The port it ',
			text_7: '',
			text_8: '',
			text_9: 'This happened, it, to ',
			tags: [
				'2',
				'0'
			]
		},
		{
			id: 'be0d41db-1127-4286-a557-6341b852ba7f',
			icon: 'QaXxZ5sXEuuwNH5SK3-UaD4TGC-1I5zq0P3P-EjRa3M1_DsBhECc3ToL17QyFdB_Yg.webp',
			title: 'Pop Us!',
			author: 'SayGames Ltd',
			rating: 4.6,
			address: '0xaac118e8f13ab4aea17d08235174aae610496bf0',
			released: '2020-09-02T11:42:37.660Z',
			downloads: 508882,
			description: 'A pleasure was burn each time. A pleasure had was each time. This happened happens, ',
			text_1: 'The sky and had it burn it the sky, the story a pleasure had, from various people happens and each time a pleasure was from various people as generally above a different story to burn above the story a dead channel was bit by bit to. Had to was more or less was from various people was was was, as generally tuned this happened to tuned all above burn it. ',
			text_2: 'All ',
			text_3: 'It ',
			text_4: '',
			text_5: 'As generally, burn ',
			text_6: 'And from various people and ',
			text_7: 'It. To was, more or less ',
			text_8: 'A different story ',
			text_9: 'And the sky a dead channel ',
			tags: []
		},
		{
			id: 'b972efa2-cab3-4456-990f-a7b5d3460c06',
			icon: '4fKG0Zy2jXBN0kiw22MmT_HV753FtJknfnY35DpU6ueRlg8lbTJwhXIa2qZD4VoQHA.webp',
			title: 'Muscle Race 3D',
			author: 'GOODROID,Inc.',
			rating: 3,
			address: '0x4979123100f7c6e055db7bbc0788bd29aa5baf6b',
			released: '2020-11-14T14:39:10.173Z',
			downloads: 141646,
			description: 'Above each time, each time it I I and happens ',
			text_1: 'A different story. It more or less the sky all above I. Was was to all the port from various people each time above the sky was a dead channel each time. To was as generally this happened from various people happens, each time was tuned bit by bit tuned each time all, bit by bit from various people to. Burn the port above ',
			text_2: 'Burn as generally. Was the port, ',
			text_3: 'Bit by bit above ',
			text_4: '',
			text_5: 'In such cases this happened ',
			text_6: 'It ',
			text_7: 'In such cases burn ',
			text_8: 'The story as generally from various people ',
			text_9: 'Was the color of television ',
			tags: [
				'2',
				'8'
			]
		},
		{
			id: 'd8aa575c-de32-42b4-b1a2-592c823ea07e',
			icon: 'fcPS6Uz9juJ1da_Yw6M7CEI_loOF8rYG57zTOqhuhYXJdRYz9q-_Onf8vO5QMmfpfUY.webp',
			title: 'Fork N Sausage',
			author: 'SayGames Ltd',
			rating: 4.4,
			address: '0x686eec9b92abdabed3688e01ae53964703456de4',
			released: '2020-10-23T19:30:45.686Z',
			downloads: 15015,
			description: 'In such cases was. All ',
			text_1: 'Was was a pleasure all in such cases, burn it was and each time from various people, each time it all, the sky. The sky was it burn above I to the sky I a pleasure more or less was it in such cases. Was this happened burn the color of television the color of television, a pleasure this happened to was. Was was, happens. This happened ',
			text_2: 'Tuned had ',
			text_3: 'And, ',
			text_4: 'And. Bit by bit the port ',
			text_5: '',
			text_6: 'Happens, it and the color of television ',
			text_7: 'It. It was in such cases ',
			text_8: 'As generally as generally bit by bit ',
			text_9: 'Burn was in such cases ',
			tags: [
				'1',
				'4',
				'6',
				'2'
			]
		}
	],
};

// create your reducer
export const rootReducer = (state: IData = initialState, action: AnyAction): IData => {
	switch (action.type) {
		case HYDRATE:
			// Attention! This will overwrite client state! Real apps should use proper reconciliation.
			return { ...state, ...action.payload };

		case setActiveMenu.toString(): {
			return {
				...state,
				activeMenu: action.payload
			};
		}

		case setTags.toString(): {
			return {
				...state,
				tags: action.payload
			};
		}

		case setDapplets.toString(): {
			console.log('Запуск');

			return {
				...state,
				dapplets: action.payload
			};
		}

		case createTag.toString(): {
			return {
				...state,
				tags: [
					...state.tags,
					action.payload
				]
			};
		}

		case createCommunityTag.toString(): {
			return {
				...state,
				communityTags: [
					...state.communityTags,
					action.payload
				]
			};
		}

		case setDrag.toString(): {
			return {
				...state,
				dapplets: action.payload
			};
		}

		default: { return state; }
	}
};

