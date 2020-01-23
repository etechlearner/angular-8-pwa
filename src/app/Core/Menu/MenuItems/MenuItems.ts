import { Injectable } from '@angular/core';

/*
 * Menu interface
 */
export interface Menu {
	state: string;
	name?: string;
	type?: string;
	icon?: string;
	children?: ChildrenItems[];
}

/*
 * Children menu interface
 */
export interface ChildrenItems {
  	state: string;
  	name: string;
  	type?: string;
}

const HEADERMENUITEMS = [
   {
      state: "home",
      name: "HOME",
      type:"link"
   },
   {  
      state: 'about', 
      name: 'About',
      type: 'link'
   },
   { state: 'pricing',
     name: 'Pricing',
     type:"link"
   },
   // {
   //    state:"pages",
   //    name:"PAGES",
   //    type:"sub",
   //    icon: '',
   //    children: [
   //       {  state:'about-us',
   //          name:'About Us',
   //          type:"subchild",
   //          children : [
   //             {  
   //                state: 'about', 
   //                name: 'About',
   //                type: 'link'
   //             },
   //             {  
   //                state: 'process', 
   //                name: 'Process',
   //                type: 'link'
   //             }
   //          ]
   //       },
   //       {
   //          state:'session',
   //          name:"Session",
   //          type:"subchild",
   //          children: [
   //             {  
   //                state: 'login', 
   //                name: 'Log In',
   //                type: 'link'
   //             },
   //             {  
   //                state: 'signup2', 
   //                name: 'Sign Up',
   //                type: 'link'
   //             },
   //             {  
   //                state: 'maintenance', 
   //                name: 'Maintenance',
   //                type: 'link'
   //             },
   //             {  
   //                state: 'comingsoon', 
   //                name: 'Coming Soon',
   //                type: 'link'
   //             },
   //             {  
   //                state: 'page-not-found', 
   //                name: '404',
   //                type: 'link'
   //             }
   //          ]
   //       },
   //       { state: 'services', name: 'Services', type:"link"},
   //       { state: 'pricing', name: 'Pricing', type:"link"},
   //       {  
   //          state: 'team', 
   //          name: 'Team',
   //          type: 'subchild',
   //          children:[
   //             {  
   //                state: 'team', 
   //                name: 'Team',
   //                type: 'link'
   //             },
   //             {  
   //                state: 'team-detail/1', 
   //                name: 'Team Detail',
   //                type: 'link'
   //             }
   //          ]
   //       },   
   //       { state: 'faq', name: 'Faq', type:"link"},
   //       { state: 'search', name: 'Search', type:"link"}
   //    ]
   // },
   // {
   //    state:"portfolio",
   //    name:"PORTFOLIO",
   //    type:"sub",
   //    icon: '',
   //    children: [
   //       { state: 'portfolio-grid', name: 'Portfolio Grid', type:"link"},
   //       { state: 'portfolio-detail/Business/1', name: 'Portfolio Detail', type:"link"}
   //    ]
   // },
   // {
   //    state:"blog",
   //    name:"BLOG",
   //    type:"sub",
   //    icon: '',
   //    children: [
   //       { state: 'blog-grid', name:'Blog Grid', type:"link"},
   //       { state: 'blog-list', name:'Blog List', type:"link"},
   //       { state: 'blog-detail/1', name: 'Blog Detail', type:"link"}
   //    ]
   // },
   {
      state: "contact",
      name: "CONTACT",
      type:"link"
   },
   {
      state: "login",
      name: "LOGIN",
      type:"link"
   },
      {
      state:"dashboard",
      name:"DASHBOARD",
      type:"sub",
      icon: '',
      children: [
         { state: 'filter-grid', name: 'Filter', type:"link"},
         { state: 'boust-grid', name: 'Boust', type:"link"},
         { state: 'profile', name: 'Profile', type:"link"},
         { state: 'logout', name: 'Logout', type:"link"}
      ]
   }
]

const FooterOneItems= [
   // {
   //    state:'',
   //    name:"Company",
   //    type:"sub",
   //    icon: '',
   //    children: [
   //       {  
   //          state: 'home', 
   //          name: 'Home',
   //          type: 'link'
   //       },
   //       {  
   //          state: 'about-us/about', 
   //          name: 'About',
   //          type: 'link'
   //       },
   //       {  
   //          state: 'pages/services', 
   //          name: 'Services',
   //          type: 'link'
   //       },
   //       {  
   //          state: 'team/team', 
   //          name: 'Team',
   //          type: 'link'
   //       }
   //    ]
   // },
   // {
   //    state:'',
   //    name:"Quick Links",
   //    type:"sub",
   //    icon: '',
   //    children: [
   //       {  
   //          state: 'blog/blog-grid', 
   //          name: 'Blog',
   //          type: 'link'
   //       },
   //       {  
   //          state: 'portfolio/portfolio-grid', 
   //          name: 'Portfolio',
   //          type: 'link'
   //       },
   //       {  
   //          state: 'session/signup2', 
   //          name: 'Sign up',
   //          type: 'link'
   //       },
   //       {  
   //          state: 'session/page-not-found', 
   //          name: '404',
   //          type: 'link'
   //       }
   //    ]
   // }
]

@Injectable()
export class MenuItems {

   /*
    * Get all header menu
    */
   getMainMenu(): Menu[] {
      return HEADERMENUITEMS;
   }

   /*
    * Get all footer menu
    */
   getFooterOneMenu(): Menu[] {
      return FooterOneItems;
   }
}
