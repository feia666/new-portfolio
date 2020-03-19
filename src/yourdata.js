// require('./components/')
export default

    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'Fei Shao',
        headerTagline: [//Line 1 For Header
                        'Hi 👋 You found me! I am Fei.',
                        //Line 2 For Header
                        'UX designer ',
                        //Line 3 For Header
                        '@ Seattle'
    ],
        //Contact Email
        contactEmail:'feiashao@gmail.com',
        // Add Your About Text Here
        abouttext: "Designer, thinker, problem-solver",
        aboutImage:'https://1aike31wshtt3k0e9u2nxtwz-wpengine.netdna-ssl.com/wp-content/uploads/2019/03/editorial-illustration-by-spiros-halaris-3.jpg',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       // Change Projects Here 
       projects:[
           {
            id: 1,//DO NOT CHANGE THIS (Please)😅
            title:'Co-Family', //Project Title - Add Your Project Title Here
             service:'UI/UX Design, speculative design', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:require('./pic/c1.jpg'),
             //Project URL - Add Your Project Url Here
             url:'/pj1'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Meetbie',
                service: 'UX Design Challenge',
                imageSrc: require('./pic/c2.jpg'),
                url:'/pj2'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Cloud-Memory',
                service: 'Mixed Reality App',
                imageSrc:require('./pic/c3.jpg'),
                url:'/pj3'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Dance Here!',
                service: 'Apple TV app design',
                imageSrc:require('./pic/c4.jpg'),
                url:'/pj4'
           }

    
        ],
        social: [
            
            {   name:'Github',
                url:'https://github.com/chetanverma16'},
            {

                name: 'Linkin',
                url: 'https://www.instagram.com/cv.uidesign/'
            },

            { name: 'Instagram',
            url: 'https://www.instagram.com/cv.uidesign/'
        }
        ]
    }