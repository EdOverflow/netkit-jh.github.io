(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{135:function(e,t,s){"use strict";var r=s(0),a=s.n(r),n=s(136),i=s.n(n),u=s(155);const c=Object(u.setupCache)({maxAge:9e5}),o=i.a.create({adapter:c.adapter});function l(e){return a.a.createElement("div",{class:"card-demo",style:{"margin-bottom":"20px"}},a.a.createElement("div",{class:"card"},a.a.createElement("div",{class:"card__header"},a.a.createElement("div",{class:"avatar"},a.a.createElement("img",{class:"avatar__photo",src:e.issue.user.avatar_url}),a.a.createElement("div",{class:"avatar__intro"},a.a.createElement("h4",{class:"avatar__name"},e.issue.user.login),a.a.createElement("small",{class:"avatar__subtitle"},a.a.createElement("a",{href:e.issue.html_url},e.issue.html_url))))),a.a.createElement("div",{class:"card__body"},a.a.createElement("h1",null,e.issue.title))))}class d extends a.a.Component{constructor(e){super(e),this.state={issues:[]},this.filterIssues=this.filterIssues.bind(this)}componentDidMount(){this._isMounted=!0,o({url:"https://api.github.com/repos/netkit-jh/netkit-jh-build/issues",method:"get"}).then((async e=>{const t=e.data;this.setState({issues:t}),console.log("__TEST__");var s=t.filter(this.filterIssues);console.table(s),console.log("__END__")})).catch((async e=>{console.log(e)}))}filterIssues(e,t,s){if(console.log(e.state),"open"!=e.state)return!1;for(var r=0;r<e.labels.length;r++){if(e.labels[r].name===this.props.label)return!0}return!1}render(){return a.a.createElement("div",null,this.state.issues.filter((e=>this.filterIssues(e))).map((e=>a.a.createElement(l,{issue:e}))))}}t.a=d},97:function(e,t,s){"use strict";s.r(t),s.d(t,"frontMatter",(function(){return u})),s.d(t,"metadata",(function(){return c})),s.d(t,"toc",(function(){return o})),s.d(t,"default",(function(){return d}));var r=s(3),a=s(7),n=(s(0),s(105)),i=s(135),u={id:"currentbugs",title:"Bugs",sidebar_label:"Bugs"},c={unversionedId:"dev/currentbugs",id:"dev/currentbugs",isDocsHomePage:!1,title:"Bugs",description:"Bugs from the Github Issues Tracker",source:"@site/docs/dev/currentbugs.md",slug:"/dev/currentbugs",permalink:"/docs/dev/currentbugs",editUrl:"https://github.com/netkit-jh/netkit-jh.github.io/edit/main/docs/dev/currentbugs.md",version:"current",sidebar_label:"Bugs",sidebar:"someSidebar",previous:{title:"Features and Improvements Currently Under Development",permalink:"/docs/dev/featuresinprogress"},next:{title:"Building Netkit-JH with Docker",permalink:"/docs/dev/guides/dockerbuild"}},o=[{value:"Bugs from the Github Issues Tracker",id:"bugs-from-the-github-issues-tracker",children:[]}],l={toc:o};function d(e){var t=e.components,s=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,s,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"bugs-from-the-github-issues-tracker"},"Bugs from the Github Issues Tracker"),Object(n.b)(i.a,{label:"bug",mdxType:"IssueCards"}))}d.isMDXComponent=!0}}]);