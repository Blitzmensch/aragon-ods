"use strict";(self.webpackChunk_aragon_ods=self.webpackChunk_aragon_ods||[]).push([[2418],{"./src/components/toggles/toggle/toggle.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Default:()=>Default,Disabled:()=>Disabled,__namedExportsOrder:()=>__namedExportsOrder,default:()=>toggle_stories});var react=__webpack_require__("./node_modules/react/index.js"),toggleGroup=__webpack_require__("./src/components/toggles/toggleGroup/toggleGroup.tsx"),toggle=__webpack_require__("./src/components/toggles/toggle/toggle.tsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const meta={title:"components/Toggles/Toggle",component:toggle.Z,tags:["autodocs"],parameters:{design:{type:"figma",url:"https://www.figma.com/file/jfKRr1V9evJUp1uBeyP3Zz/v1.0.0?type=design&node-id=9778-14&mode=dev"}}},Default={render:props=>(0,jsx_runtime.jsx)(toggleGroup.t,{isMultiSelect:!1,children:(0,jsx_runtime.jsx)(toggle.Z,{...props})}),args:{value:"value",label:"Label"}},ControllerComponent=props=>{const[value,setValue]=(0,react.useState)();return(0,jsx_runtime.jsx)(toggleGroup.t,{isMultiSelect:!1,value,onChange:setValue,children:(0,jsx_runtime.jsx)(toggle.Z,{...props})})};ControllerComponent.displayName="ControllerComponent";const Controlled={render:props=>(0,jsx_runtime.jsx)(ControllerComponent,{...props}),args:{value:"value",label:"Label"}},Disabled={render:props=>(0,jsx_runtime.jsx)(toggleGroup.t,{isMultiSelect:!1,children:(0,jsx_runtime.jsx)(toggle.Z,{...props})}),args:{disabled:!0,label:"Disabled"}},toggle_stories=meta;Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: props => <ToggleGroup isMultiSelect={false}>\n            <Toggle {...props} />\n        </ToggleGroup>,\n  args: {\n    value: 'value',\n    label: 'Label'\n  }\n}",...Default.parameters?.docs?.source},description:{story:"Default usage example of the Toggle component.",...Default.parameters?.docs?.description}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:"{\n  render: props => <ControllerComponent {...props} />,\n  args: {\n    value: 'value',\n    label: 'Label'\n  }\n}",...Controlled.parameters?.docs?.source},description:{story:"Controlled usage example of the Toggle component.",...Controlled.parameters?.docs?.description}}},Disabled.parameters={...Disabled.parameters,docs:{...Disabled.parameters?.docs,source:{originalSource:"{\n  render: props => <ToggleGroup isMultiSelect={false}>\n            <Toggle {...props} />\n        </ToggleGroup>,\n  args: {\n    disabled: true,\n    label: 'Disabled'\n  }\n}",...Disabled.parameters?.docs?.source},description:{story:"Disabled Toggle component.",...Disabled.parameters?.docs?.description}}};const __namedExportsOrder=["Default","Controlled","Disabled"];try{Default.displayName="Default",Default.__docgenInfo={description:"Default usage example of the Toggle component.",displayName:"Default",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/toggles/toggle/toggle.stories.tsx#Default"]={docgenInfo:Default.__docgenInfo,name:"Default",path:"src/components/toggles/toggle/toggle.stories.tsx#Default"})}catch(__react_docgen_typescript_loader_error){}try{Controlled.displayName="Controlled",Controlled.__docgenInfo={description:"Controlled usage example of the Toggle component.",displayName:"Controlled",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/toggles/toggle/toggle.stories.tsx#Controlled"]={docgenInfo:Controlled.__docgenInfo,name:"Controlled",path:"src/components/toggles/toggle/toggle.stories.tsx#Controlled"})}catch(__react_docgen_typescript_loader_error){}try{Disabled.displayName="Disabled",Disabled.__docgenInfo={description:"Disabled Toggle component.",displayName:"Disabled",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/toggles/toggle/toggle.stories.tsx#Disabled"]={docgenInfo:Disabled.__docgenInfo,name:"Disabled",path:"src/components/toggles/toggle/toggle.stories.tsx#Disabled"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/toggles/toggle/toggle.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>Toggle});var _radix_ui_react_toggle_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-toggle-group/dist/index.mjs"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const Toggle=props=>{const{className,label,value,disabled,...otherProps}=props,toggleClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("flex h-10 items-center rounded-[40px] border border-neutral-100 px-4","focus:outline-none focus-visible:ring focus-visible:ring-primary focus-visible:ring-offset","hover:enabled:border-neutral-200 hover:enabled:shadow-neutral","data-[state=off]:enabled:bg-neutral-0 data-[state=off]:enabled:text-neutral-600","data-[state=on]:enabled:bg-neutral-100 data-[state=on]:enabled:text-neutral-800","disabled:bg-neutral-100 disabled:text-neutral-300",className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_toggle_group__WEBPACK_IMPORTED_MODULE_2__.GX,{className:toggleClasses,disabled,value,...otherProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p",{className:"text-sm font-semibold leading-normal md:text-base",children:label})})};Toggle.displayName="Toggle";try{Toggle.displayName="Toggle",Toggle.__docgenInfo={description:'The Toggle component is a button that handles the "on" and "off" states.\n\n**NOTE**: The component must be used inside a `<ToggleGroup />` component in order to work properly.',displayName:"Toggle",props:{value:{defaultValue:null,description:"Value of the toggle.",name:"value",required:!0,type:{name:"string"}},label:{defaultValue:null,description:"Label of the toggle.",name:"label",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/toggles/toggle/toggle.tsx#Toggle"]={docgenInfo:Toggle.__docgenInfo,name:"Toggle",path:"src/components/toggles/toggle/toggle.tsx#Toggle"})}catch(__react_docgen_typescript_loader_error){}},"./src/components/toggles/toggleGroup/toggleGroup.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>ToggleGroup});var _radix_ui_react_toggle_group__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@radix-ui/react-toggle-group/dist/index.mjs"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");const ToggleGroup=props=>{const{value,onChange,isMultiSelect,className,...otherProps}=props,classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("flex flex-row flex-wrap gap-2 md:gap-3",className);return!0===isMultiSelect?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_toggle_group__WEBPACK_IMPORTED_MODULE_2__.tX,{type:"multiple",className:classes,value,onValueChange:onChange,...otherProps}):(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_radix_ui_react_toggle_group__WEBPACK_IMPORTED_MODULE_2__.tX,{type:"single",className:classes,value,onValueChange:onChange,...otherProps})};ToggleGroup.displayName="ToggleGroup";try{ToggleGroup.displayName="ToggleGroup",ToggleGroup.__docgenInfo={description:"",displayName:"ToggleGroup",props:{isMultiSelect:{defaultValue:null,description:"Allows multiple toggles to be selected at the same time when set to true.",name:"isMultiSelect",required:!0,type:{name:"boolean"}},value:{defaultValue:null,description:"Current value of the toggle selection.",name:"value",required:!1,type:{name:"string | string[]"}},onChange:{defaultValue:null,description:"Callback called on toggle selection change.",name:"onChange",required:!1,type:{name:"((value: string[]) => void) | ((value: string) => void) | undefined"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/toggles/toggleGroup/toggleGroup.tsx#ToggleGroup"]={docgenInfo:ToggleGroup.__docgenInfo,name:"ToggleGroup",path:"src/components/toggles/toggleGroup/toggleGroup.tsx#ToggleGroup"})}catch(__react_docgen_typescript_loader_error){}}}]);