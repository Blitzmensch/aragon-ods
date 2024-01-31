/*! For license information please see components-button-button-stories.d1a50c87.iframe.bundle.js.LICENSE.txt */
(self.webpackChunk_aragon_ods=self.webpackChunk_aragon_ods||[]).push([[4229],{"./src/components/button/button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Link:()=>Link,ResponsiveButton:()=>ResponsiveButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const meta={title:"components/Button",component:__webpack_require__("./src/components/button/button.tsx").z,tags:["autodocs"],argTypes:{href:{control:"text"}},parameters:{design:{type:"figma",url:"https://www.figma.com/file/jfKRr1V9evJUp1uBeyP3Zz/v1.0.0?type=design&node-id=7980-15610&mode=design&t=GaPykW52ajbQx2r7-4"}}},Default={args:{variant:"primary",size:"lg",children:"Button label",onClick:()=>alert("click")}},Link={args:{variant:"primary",size:"lg",children:"Link label",onClick:()=>alert("click"),href:"https://www.google.com",target:"_blank"}},ResponsiveButton={args:{variant:"primary",size:"md",responsiveSize:{xl:"lg"},children:"Responsive button"}},__WEBPACK_DEFAULT_EXPORT__=meta;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    size: 'lg',\n    children: 'Button label',\n    onClick: () => alert('click')\n  }\n}",...Default.parameters?.docs?.source},description:{story:"Default usage example of the Button component.",...Default.parameters?.docs?.description}}},Link.parameters={...Link.parameters,docs:{...Link.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    size: 'lg',\n    children: 'Link label',\n    onClick: () => alert('click'),\n    href: 'https://www.google.com',\n    target: '_blank'\n  }\n}",...Link.parameters?.docs?.source},description:{story:"The Button component renders a <a /> tag when the href property is set.",...Link.parameters?.docs?.description}}},ResponsiveButton.parameters={...ResponsiveButton.parameters,docs:{...ResponsiveButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    variant: 'primary',\n    size: 'md',\n    responsiveSize: {\n      xl: 'lg'\n    },\n    children: 'Responsive button'\n  }\n}",...ResponsiveButton.parameters?.docs?.source},description:{story:"Button component with a size that changes depending on the current breakpoint.",...ResponsiveButton.parameters?.docs?.description}}};const __namedExportsOrder=["Default","Link","ResponsiveButton"];try{Default.displayName="Default",Default.__docgenInfo={description:"Default usage example of the Button component.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/button.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/components/button/button.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{Link.displayName="Link",Link.__docgenInfo={description:"The Button component renders a <a /> tag when the href property is set.",displayName:"Link",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/button.stories.tsx#Link"]={docgenInfo:Link.__docgenInfo,name:"Link",path:"src/components/button/button.stories.tsx#Link"})}catch(__react_docgen_typescript_loader_error){}try{ResponsiveButton.displayName="ResponsiveButton",ResponsiveButton.__docgenInfo={description:"Button component with a size that changes depending on the current breakpoint.",displayName:"ResponsiveButton",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/button.stories.tsx#ResponsiveButton"]={docgenInfo:ResponsiveButton.__docgenInfo,name:"ResponsiveButton",path:"src/components/button/button.stories.tsx#ResponsiveButton"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/button/button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/index.ts"),_icon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/components/icon/index.ts"),_spinner__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/spinner/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");const variantToClassNames={primary:["bg-primary-400 text-neutral-0 border-primary-400","hover:bg-primary-500 hover:border-primary-500 hover:shadow-primary-md","active:bg-primary-800 active:border-primary-800","focus-visible:ring-primary","aria-disabled:bg-primary-100 aria-disabled:text-primary-300 aria-disabled:border-primary-100"],secondary:["bg-neutral-0 text-primary-400 border-neutral-100","hover:border-neutral-200 hover:shadow-neutral-md","active:border-primary-400","focus-visible:ring-primary","aria-disabled:bg-neutral-100 aria-disabled:text-neutral-300 aria-disabled:border-neutral-100"],tertiary:["bg-neutral-0 text-neutral-600 border-neutral-100","hover:border-neutral-200 hover:shadow-neutral-md","active:border-neutral-300","focus-visible:ring-primary","aria-disabled:bg-neutral-100 aria-disabled:text-neutral-300 aria-disabled:border-neutral-100"],success:["bg-success-100 text-success-800 border-success-300","hover:border-success-400 hover:shadow-success-md","active:border-success-500","focus-visible:ring-success","aria-disabled:bg-success-100 aria-disabled:text-success-400 aria-disabled:border-success-200"],warning:["bg-warning-100 text-warning-800 border-warning-300","hover:border-warning-400 hover:shadow-warning-md","active:border-warning-500","focus-visible:ring-warning","aria-disabled:bg-warning-100 aria-disabled:text-warning-400 aria-disabled:border-warning-200"],critical:["bg-critical-100 text-critical-800 border-critical-300","hover:border-critical-400 hover:shadow-critical-md","active:border-critical-500","focus-visible:ring-critical","aria-disabled:bg-critical-100 aria-disabled:text-critical-400 aria-disabled:border-critical-200"]},variantToSpinnerVariant={primary:"primary",secondary:"neutral",tertiary:"neutral",success:"success",warning:"warning",critical:"critical"},responsiveSizeClassNames={sm:{sm:"h-[32px] text-sm rounded-lg gap-0.5",md:"md:h-[32px] md:text-sm md:rounded-lg md:gap-0.5",lg:"lg:h-[32px] lg:text-sm lg:rounded-lg lg:gap-0.5",xl:"xl:h-[32px] xl:text-sm xl:rounded-lg xl:gap-0.5","2xl":"2xl:h-[32px] 2xl:text-sm 2xl:rounded-lg 2xl:gap-0.5"},md:{sm:"h-[40px] text-base rounded-xl gap-1",md:"md:h-[40px] md:text-base md:rounded-xl md:gap-1",lg:"lg:h-[40px] lg:text-base lg:rounded-xl lg:gap-1",xl:"xl:h-[40px] xl:text-base xl:rounded-xl xl:gap-1","2xl":"2xl:h-[40px] 2xl:text-base 2xl:rounded-xl 2xl:gap-1"},lg:{sm:"h-[48px] text-base rounded-xl gap-1",md:"md:h-[48px] md:text-base md:rounded-xl md:gap-1",lg:"lg:h-[48px] lg:text-base lg:rounded-xl lg:gap-1",xl:"xl:h-[48px] xl:text-base xl:rounded-xl xl:gap-1","2xl":"2xl:h-[48px] 2xl:text-base 2xl:rounded-xl 2xl:gap-1"}},responsiveDefaultContextClassNames={sm:{sm:"min-w-[80px] px-2",md:"md:min-w-[80px] md:px-2",lg:"lg:min-w-[80px] lg:px-2",xl:"xl:min-w-[80px] xl:px-2","2xl":"2xl:min-w-[80px] 2xl:px-2"},md:{sm:"min-w-[96px] px-3",md:"md:min-w-[96px] md:px-3",lg:"lg:min-w-[96px] lg:px-3",xl:"xl:min-w-[96px] xl:px-3","2xl":"2xl:min-w-[96px] 2xl:px-3"},lg:{sm:"min-w-[112px] px-4",md:"md:min-w-[112px] md:px-4",lg:"lg:min-w-[112px] lg:px-4",xl:"xl:min-w-[112px] xl:px-4","2xl":"2xl:min-w-[112px] 2xl:px-4"}},responsiveOnlyIconContextClassNames={sm:{sm:"w-[32px]",md:"md:w-[32px]",lg:"lg:w-[32px]",xl:"xl:w-[32px]","2xl":"2xl:w-[32px]"},md:{sm:"w-[40px]",md:"md:w-[40px]",lg:"lg:w-[40px]",xl:"xl:w-[40px]","2xl":"2xl:w-[40px]"},lg:{sm:"w-[48px]",md:"md:w-[48px]",lg:"lg:w-[48px]",xl:"xl:w-[48px]","2xl":"2xl:w-[48px]"}},sizeToIconSize={lg:{default:"md",onlyIcon:"lg"},md:{default:"md",onlyIcon:"md"},sm:{default:"sm",onlyIcon:"sm"}},sizeToSpinnerSize={lg:"md",md:"md",sm:"sm"},Button=props=>{const{variant,size,responsiveSize={},iconRight,iconLeft,className,children,state,...otherProps}=props,isOnlyIcon=null==children||""===children,isDisabled="disabled"===state||"loading"===state,buttonContext=isOnlyIcon?"onlyIcon":"default",commonClasses=["flex flex-row items-center justify-center","leading-tight font-semibold","border cursor:pointer","focus:outline-none focus-visible:ring focus-visible:ring-offset aria-disabled:cursor-not-allowed"].join(" "),variantClasses=variantToClassNames[variant].filter((classes=>"disabled"===state?!classes.includes("hover"):"loading"!==state||!classes.includes("disabled")&&!classes.includes("hover")&&!classes.includes("active"))).join(" "),sizeClassNames=_utils__WEBPACK_IMPORTED_MODULE_1__.ds.generateClassNames(size,responsiveSize,responsiveSizeClassNames),contextClassNames=_utils__WEBPACK_IMPORTED_MODULE_1__.ds.generateClassNames(size,responsiveSize,isOnlyIcon?responsiveOnlyIconContextClassNames:responsiveDefaultContextClassNames),classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()(commonClasses,variantClasses,sizeClassNames,contextClassNames,className,{"cursor-progress":"loading"===state}),iconSize=sizeToIconSize[size][buttonContext],iconResponsiveSize=Object.keys(responsiveSize??{}).reduce(((current,breakpoint)=>({...current,[breakpoint]:sizeToIconSize[responsiveSize[breakpoint]][buttonContext]})),{}),spinnerSize=sizeToSpinnerSize[size],spinnerResponsiveSize=Object.keys(responsiveSize??{}).reduce(((current,breakpoint)=>({...current,[breakpoint]:sizeToSpinnerSize[responsiveSize[breakpoint]]})),{}),displayIconLeft="loading"!==state&&null!=iconLeft,displayIconRight="loading"!==state&&null!=iconRight&&!isOnlyIcon,commonProps={className:classes,"aria-disabled":isDisabled},buttonContent=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment,{children:[displayIconLeft&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_2__.J,{icon:iconLeft,size:iconSize,responsiveSize:iconResponsiveSize}),"loading"===state&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_spinner__WEBPACK_IMPORTED_MODULE_3__.$,{size:spinnerSize,responsiveSize:spinnerResponsiveSize,variant:variantToSpinnerVariant[variant]}),!isOnlyIcon&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div",{className:"px-1",children}),displayIconRight&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_icon__WEBPACK_IMPORTED_MODULE_2__.J,{icon:iconRight,size:iconSize,responsiveSize:iconResponsiveSize})]}),handleLinkClick=onClick=>event=>{isDisabled?event.preventDefault():onClick?.(event)};if("href"in otherProps&&""!==otherProps.href){const{onClick,href,...linkProps}=otherProps;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a",{href,onClick:handleLinkClick(onClick),...commonProps,...linkProps,children:buttonContent})}const buttonProps=otherProps;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button",{disabled:isDisabled,...commonProps,...buttonProps,children:buttonContent})};Button.displayName="Button";try{Button.displayName="Button",Button.__docgenInfo={description:"",displayName:"Button",props:{variant:{defaultValue:null,description:"Variant of the button.",name:"variant",required:!0,type:{name:"enum",value:[{value:'"warning"'},{value:'"critical"'},{value:'"success"'},{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},size:{defaultValue:null,description:"Size of the button.",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},responsiveSize:{defaultValue:null,description:"Applies responsiveness to the size of the button.",name:"responsiveSize",required:!1,type:{name:"Partial<Record<Breakpoint, ButtonSize>>"}},state:{defaultValue:null,description:"State of the button.",name:"state",required:!1,type:{name:"enum",value:[{value:'"disabled"'},{value:'"loading"'}]}},iconRight:{defaultValue:null,description:"Icon displayed on the right side of the button.",name:"iconRight",required:!1,type:{name:"enum",value:[{value:'"ADD"'},{value:'"APP_COMMUNITY"'},{value:'"APP_DASHBOARD"'},{value:'"APP_FINANCE"'},{value:'"APP_GOVERNANCE"'},{value:'"BLOCKCHAIN"'},{value:'"CALENDAR"'},{value:'"CHECKBOX_DEFAULT"'},{value:'"CHECKBOX_MULTI"'},{value:'"CHECKBOX_SELECTED"'},{value:'"CHECKMARK"'},{value:'"CHEVRON_DOWN"'},{value:'"CHEVRON_LEFT"'},{value:'"CHEVRON_RIGHT"'},{value:'"CHEVRON_UP"'},{value:'"CLOCK"'},{value:'"CLOSE"'},{value:'"COPY"'},{value:'"EXPAND"'},{value:'"EXPLORE"'},{value:'"FAVOURITE_DEFAULT"'},{value:'"FAVOURITE_SELECTED"'},{value:'"FEEDBACK"'},{value:'"FILTER"'},{value:'"FLAG"'},{value:'"GAS_FEE"'},{value:'"HOME"'},{value:'"INFO"'},{value:'"LINK_EXTERNAL"'},{value:'"MENU_DEFAULT"'},{value:'"MENU_HORIZONTAL"'},{value:'"MENU_VERTICAL"'},{value:'"PERSON"'},{value:'"QUESTION"'},{value:'"RADIO_CANCEL"'},{value:'"RADIO_CHECK"'},{value:'"RADIO_DEFAULT"'},{value:'"RADIO_PAUSE"'},{value:'"RADIO_SELECTED"'},{value:'"RELOAD"'},{value:'"REMOVE"'},{value:'"SEARCH"'},{value:'"SETTINGS"'},{value:'"SHRINK"'},{value:'"SORT"'},{value:'"SWITCH"'},{value:'"TURN_OFF"'},{value:'"TX_DEPOSIT"'},{value:'"TX_FAILURE"'},{value:'"TX_SMART_CONTRACT"'},{value:'"TX_WITHDRAW"'},{value:'"UPDATE"'},{value:'"WARNING"'},{value:'"WYSIWYG_BOLD"'},{value:'"WYSIWYG_ITALIC"'},{value:'"WYSIWYG_LINK_SET"'},{value:'"WYSIWYG_LINK_UNSET"'},{value:'"WYSIWYG_LIST_ORDERED"'},{value:'"WYSIWYG_LIST_UNORDERED"'}]}},iconLeft:{defaultValue:null,description:"Icon displayed on the left side of the button.",name:"iconLeft",required:!1,type:{name:"enum",value:[{value:'"ADD"'},{value:'"APP_COMMUNITY"'},{value:'"APP_DASHBOARD"'},{value:'"APP_FINANCE"'},{value:'"APP_GOVERNANCE"'},{value:'"BLOCKCHAIN"'},{value:'"CALENDAR"'},{value:'"CHECKBOX_DEFAULT"'},{value:'"CHECKBOX_MULTI"'},{value:'"CHECKBOX_SELECTED"'},{value:'"CHECKMARK"'},{value:'"CHEVRON_DOWN"'},{value:'"CHEVRON_LEFT"'},{value:'"CHEVRON_RIGHT"'},{value:'"CHEVRON_UP"'},{value:'"CLOCK"'},{value:'"CLOSE"'},{value:'"COPY"'},{value:'"EXPAND"'},{value:'"EXPLORE"'},{value:'"FAVOURITE_DEFAULT"'},{value:'"FAVOURITE_SELECTED"'},{value:'"FEEDBACK"'},{value:'"FILTER"'},{value:'"FLAG"'},{value:'"GAS_FEE"'},{value:'"HOME"'},{value:'"INFO"'},{value:'"LINK_EXTERNAL"'},{value:'"MENU_DEFAULT"'},{value:'"MENU_HORIZONTAL"'},{value:'"MENU_VERTICAL"'},{value:'"PERSON"'},{value:'"QUESTION"'},{value:'"RADIO_CANCEL"'},{value:'"RADIO_CHECK"'},{value:'"RADIO_DEFAULT"'},{value:'"RADIO_PAUSE"'},{value:'"RADIO_SELECTED"'},{value:'"RELOAD"'},{value:'"REMOVE"'},{value:'"SEARCH"'},{value:'"SETTINGS"'},{value:'"SHRINK"'},{value:'"SORT"'},{value:'"SWITCH"'},{value:'"TURN_OFF"'},{value:'"TX_DEPOSIT"'},{value:'"TX_FAILURE"'},{value:'"TX_SMART_CONTRACT"'},{value:'"TX_WITHDRAW"'},{value:'"UPDATE"'},{value:'"WARNING"'},{value:'"WYSIWYG_BOLD"'},{value:'"WYSIWYG_ITALIC"'},{value:'"WYSIWYG_LINK_SET"'},{value:'"WYSIWYG_LINK_UNSET"'},{value:'"WYSIWYG_LIST_ORDERED"'},{value:'"WYSIWYG_LIST_UNORDERED"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/button/button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"src/components/button/button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/icon/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{J:()=>_icon__WEBPACK_IMPORTED_MODULE_0__.J,T:()=>_iconType__WEBPACK_IMPORTED_MODULE_1__.T});var _icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/icon/icon.tsx"),_iconType__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/icon/iconType.ts")},"./src/components/spinner/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>_spinner__WEBPACK_IMPORTED_MODULE_0__.$});var _spinner__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/spinner/spinner.tsx")},"./src/components/spinner/spinner.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Spinner});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_utils__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/utils/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const responsiveSizeClassNames={sm:{sm:"w-4 h-4",md:"md:w-4 md:h-4",lg:"lg:w-4 lg:h-4",xl:"xl:w-4 xl:h-4","2xl":"2xl:w-4 2xl:h-4"},md:{sm:"w-5 h-5",md:"md:w-5 md:h-5",lg:"lg:w-5 lg:h-5",xl:"xl:w-5 xl:h-5","2xl":"2xl:w-5 2xl:h-5"},lg:{sm:"w-6 h-6",md:"md:w-6 md:h-6",lg:"lg:w-6 lg:h-6",xl:"xl:w-6 xl:h-6","2xl":"2xl:w-6 2xl:h-6"},xl:{sm:"w-8 h-8",md:"md:w-8 md:h-8",lg:"lg:w-8 lg:h-8",xl:"xl:w-8 xl:h-8","2xl":"2xl:w-8 2xl:h-8"}},variantToClassNames={neutral:"border-neutral-100 border-t-primary-400",primary:"border-primary-300 border-t-neutral-0",success:"border-success-300 border-t-success-800",warning:"border-warning-300 border-t-warning-800",critical:"border-critical-300 border-t-critical-800"},Spinner=props=>{const{size,responsiveSize={},variant,className,...otherProps}=props,sizeClassNames=_utils__WEBPACK_IMPORTED_MODULE_1__.ds.generateClassNames(size,responsiveSize,responsiveSizeClassNames),spinnerClassNames=classnames__WEBPACK_IMPORTED_MODULE_0___default()("animate-spin rounded-full border-2",variantToClassNames[variant],sizeClassNames,className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{role:"progressbar",className:spinnerClassNames,...otherProps})};Spinner.displayName="Spinner";try{Spinner.displayName="Spinner",Spinner.__docgenInfo={description:"Spinner UI component",displayName:"Spinner",props:{size:{defaultValue:null,description:"Size of the spinner.",name:"size",required:!0,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'},{value:'"xl"'}]}},responsiveSize:{defaultValue:null,description:"Size of the spinner depending on the current breakpoint.",name:"responsiveSize",required:!1,type:{name:"Partial<Record<Breakpoint, SpinnerSize>>"}},variant:{defaultValue:null,description:"Variant of the spinner.",name:"variant",required:!0,type:{name:"enum",value:[{value:'"neutral"'},{value:'"warning"'},{value:'"critical"'},{value:'"success"'},{value:'"primary"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/spinner/spinner.tsx#Spinner"]={docgenInfo:Spinner.__docgenInfo,name:"Spinner",path:"src/components/spinner/spinner.tsx#Spinner"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes="",i=0;i<arguments.length;i++){var arg=arguments[i];arg&&(classes=appendClass(classes,parseValue(arg)))}return classes}function parseValue(arg){if("string"==typeof arg||"number"==typeof arg)return arg;if("object"!=typeof arg)return"";if(Array.isArray(arg))return classNames.apply(null,arg);if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]"))return arg.toString();var classes="";for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&(classes=appendClass(classes,key));return classes}function appendClass(value,newClass){return newClass?value?value+" "+newClass:value+newClass:value}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);