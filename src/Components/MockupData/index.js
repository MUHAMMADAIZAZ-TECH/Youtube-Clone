import { MdHome,MdOutlineAppShortcut,MdOutlineSmartDisplay,
  MdVideoLibrary,MdHistory,MdPersonPin,
  MdOutlineLocalFireDepartment,MdOutlineMusicNote,
  MdOutlineNewspaper,MdOutlineVideogameAsset,MdOutlineOpenInBrowser,MdSettingsSuggest,MdHelpCenter,
  MdReportGmailerrorred,MdOutlineFeedback
} from 'react-icons/md';
const Videos = [{
      videourl:"karachi1",
      videotitle:'karachi kings Psl 3',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"karachi2",
      videotitle:'karachi kings Psl 4',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"karachi5",
      videotitle:'karachi kings Psl 5',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"korangi1",
      videotitle:'korangi',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"landhi2",
      videotitle:'landhi',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"london2",
      videotitle:'london',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"landmark1",
      videotitle:'landmark',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"liyari1",
      videotitle:'liyari',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"malir1",
      videotitle:'malir',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"malinga5",
      videotitle:'malinga',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"malairaia4",
      videotitle:'malaraia',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"lahore1",
      videotitle:'lahore qalanders Psl 6',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"lahore2",
      videotitle:'lahore qalanders Psl 1',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"lahore3",
      videotitle:'lahore qalanders Psl 6',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"multan7",
      videotitle:'multan sultan Psl 6',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"multan8",
      videotitle:'multan sultan Psl 2',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    },{
      videourl:"multan2",
      videotitle:'multan sultan Psl 4',
      videodescription:'psl It is a long established fact that a reader will be distracted by',
      videoPosttime:'1 month ago 5 minutes',
      videoviews:'850,635 views',
    }
  ]
  const Navlist =['All','Live','Music','Dubbing','Scene','Dramedy','Kapil Sharma','Cricket','ACP Pradyuman','Animated Films',
  'Gaming','Pakistani Dramas','Indian Pop Music','MotorCycle','Tourist Destinations'];
  const SidebarContent = [
    [{text:"Home",icon:<MdHome/>},
    {text:"Shorts",icon:<MdOutlineAppShortcut/>}, 
    {text:"Subscription",icon:<MdOutlineSmartDisplay/>}
    ],
    [{text:"Library",icon:<MdVideoLibrary/>},
    {text:"History",icon:<MdHistory/>}],
    [{extra:"Sign in to like videos, comment and subscribe."},
    {text:"Sign in",icon:<MdPersonPin/>}
    ],
    [{extra:"Explore"},{text:"Trending",icon:<MdOutlineLocalFireDepartment/>},
    {text:"Music",icon:<MdOutlineMusicNote/>},
    {text:"Gaming",icon:<MdOutlineVideogameAsset/>},
    {text:"News",icon:<MdOutlineNewspaper/>}
    ],
    [{text:"Browse Channels",icon:<MdOutlineOpenInBrowser/>}],
    [{extra:"More from youtube"},{text:"Youtube kids",icon:<MdOutlineVideogameAsset/>},
    {text:"Youtube Tv",icon:<MdOutlineVideogameAsset/>}
    ],
    [{text:"Setting",icon:<MdSettingsSuggest/>},
    {text:"Report",icon:<MdReportGmailerrorred/>},
    {text:"Help",icon:<MdHelpCenter/>},
    {text:"Send Feedback",icon:<MdOutlineFeedback/>},
    ],
    [{extra:"About Press Copyright"},
    {extra:"Contact us CreatorAdvertise Developers"},
    {extra:"Terms Privacy Policy & Safety"},
    {extra:"How YouTube works"},
    {extra:"Test new features"},
    {extra:"© 2023 Google LLC"},
    ]
    
  ]
  export {
    Videos,
    Navlist,
    SidebarContent
  }