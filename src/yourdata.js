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
            title:'Project One', //Project Title - Add Your Project Title Here
             service:'UI/UX Design', // Add Your Service Type Here
            //Project Image - Add Your Project Image Here
             imageSrc:require('./components/c1.jpg'),
             //Project URL - Add Your Project Url Here
             url:'/pj1'
            },
            {
                id: 2,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Two',
                service: 'Website Development',
                imageSrc: require('./components/c2.jpg'),
                url:'/pj2'
            },
            { 
                id: 3,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Three',
                service: 'Web App',
                imageSrc: "https://images.unsplash.com/photo-1511500118080-275313ec90a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
                url:'/pj3'
            },
            {
                id: 4,//DO NOT CHANGE THIS (Please)😅
                title: 'Project Four',
                service: 'Branding',
                imageSrc: "https://images.unsplash.com/photo-1558452919-08ae4aea8e29?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
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