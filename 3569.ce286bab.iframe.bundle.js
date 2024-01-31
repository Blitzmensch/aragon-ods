"use strict";(self.webpackChunk_aragon_ods=self.webpackChunk_aragon_ods||[]).push([[3569],{"./node_modules/@radix-ui/react-toggle-group/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tX:()=>$6c1fd9e6a8969628$export$af3ec21f6cfb5e30,GX:()=>$6c1fd9e6a8969628$export$b453109e13abe10b});var esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),react_namespaceObject=__webpack_require__.t(react,2),dist=__webpack_require__("./node_modules/@radix-ui/react-context/dist/index.mjs"),react_primitive_dist=__webpack_require__("./node_modules/@radix-ui/react-primitive/dist/index.mjs"),primitive_dist=__webpack_require__("./node_modules/@radix-ui/primitive/dist/index.mjs"),react_compose_refs_dist=__webpack_require__("./node_modules/@radix-ui/react-compose-refs/dist/index.mjs"),react_slot_dist=__webpack_require__("./node_modules/@radix-ui/react-slot/dist/index.mjs");var react_use_layout_effect_dist=__webpack_require__("./node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs");const $1746a345f3d73bb7$var$useReactId=react_namespaceObject["useId".toString()]||(()=>{});let $1746a345f3d73bb7$var$count=0;var react_use_callback_ref_dist=__webpack_require__("./node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs"),react_use_controllable_state_dist=__webpack_require__("./node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs");const $f631663db3294ace$var$DirectionContext=(0,react.createContext)(void 0);function $f631663db3294ace$export$b39126d51d94e6f3(localDir){const globalDir=(0,react.useContext)($f631663db3294ace$var$DirectionContext);return localDir||globalDir||"ltr"}const $d7bdfb9eb0fdf311$var$EVENT_OPTIONS={bubbles:!1,cancelable:!0},[$d7bdfb9eb0fdf311$var$Collection,$d7bdfb9eb0fdf311$var$useCollection,$d7bdfb9eb0fdf311$var$createCollectionScope]=function $e02a7d9cb1dc128c$export$c74125a8e3af6bb2(name){const PROVIDER_NAME=name+"CollectionProvider",[createCollectionContext,createCollectionScope]=(0,dist.b)(PROVIDER_NAME),[CollectionProviderImpl,useCollectionContext]=createCollectionContext(PROVIDER_NAME,{collectionRef:{current:null},itemMap:new Map}),CollectionProvider=props=>{const{scope,children}=props,ref=react.useRef(null),itemMap=react.useRef(new Map).current;return react.createElement(CollectionProviderImpl,{scope,itemMap,collectionRef:ref},children)},COLLECTION_SLOT_NAME=name+"CollectionSlot",CollectionSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children}=props,context=useCollectionContext(COLLECTION_SLOT_NAME,scope),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,context.collectionRef);return react.createElement(react_slot_dist.g7,{ref:composedRefs},children)})),ITEM_SLOT_NAME=name+"CollectionItemSlot",CollectionItemSlot=react.forwardRef(((props,forwardedRef)=>{const{scope,children,...itemData}=props,ref=react.useRef(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref),context=useCollectionContext(ITEM_SLOT_NAME,scope);return react.useEffect((()=>(context.itemMap.set(ref,{ref,...itemData}),()=>{context.itemMap.delete(ref)}))),react.createElement(react_slot_dist.g7,{"data-radix-collection-item":"",ref:composedRefs},children)}));return[{Provider:CollectionProvider,Slot:CollectionSlot,ItemSlot:CollectionItemSlot},function useCollection(scope){const context=useCollectionContext(name+"CollectionConsumer",scope);return react.useCallback((()=>{const collectionNode=context.collectionRef.current;if(!collectionNode)return[];const orderedNodes=Array.from(collectionNode.querySelectorAll("[data-radix-collection-item]"));return Array.from(context.itemMap.values()).sort(((a,b)=>orderedNodes.indexOf(a.ref.current)-orderedNodes.indexOf(b.ref.current)))}),[context.collectionRef,context.itemMap])},createCollectionScope]}("RovingFocusGroup"),[$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext,$d7bdfb9eb0fdf311$export$c7109489551a4f4]=(0,dist.b)("RovingFocusGroup",[$d7bdfb9eb0fdf311$var$createCollectionScope]),[$d7bdfb9eb0fdf311$var$RovingFocusProvider,$d7bdfb9eb0fdf311$var$useRovingFocusContext]=$d7bdfb9eb0fdf311$var$createRovingFocusGroupContext("RovingFocusGroup"),$d7bdfb9eb0fdf311$export$8699f7c8af148338=(0,react.forwardRef)(((props,forwardedRef)=>(0,react.createElement)($d7bdfb9eb0fdf311$var$Collection.Provider,{scope:props.__scopeRovingFocusGroup},(0,react.createElement)($d7bdfb9eb0fdf311$var$Collection.Slot,{scope:props.__scopeRovingFocusGroup},(0,react.createElement)($d7bdfb9eb0fdf311$var$RovingFocusGroupImpl,(0,esm_extends.Z)({},props,{ref:forwardedRef})))))),$d7bdfb9eb0fdf311$var$RovingFocusGroupImpl=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,orientation,loop=!1,dir,currentTabStopId:currentTabStopIdProp,defaultCurrentTabStopId,onCurrentTabStopIdChange,onEntryFocus,...groupProps}=props,ref=(0,react.useRef)(null),composedRefs=(0,react_compose_refs_dist.e)(forwardedRef,ref),direction=$f631663db3294ace$export$b39126d51d94e6f3(dir),[currentTabStopId=null,setCurrentTabStopId]=(0,react_use_controllable_state_dist.T)({prop:currentTabStopIdProp,defaultProp:defaultCurrentTabStopId,onChange:onCurrentTabStopIdChange}),[isTabbingBackOut,setIsTabbingBackOut]=(0,react.useState)(!1),handleEntryFocus=(0,react_use_callback_ref_dist.W)(onEntryFocus),getItems=$d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup),isClickFocusRef=(0,react.useRef)(!1),[focusableItemsCount,setFocusableItemsCount]=(0,react.useState)(0);return(0,react.useEffect)((()=>{const node=ref.current;if(node)return node.addEventListener("rovingFocusGroup.onEntryFocus",handleEntryFocus),()=>node.removeEventListener("rovingFocusGroup.onEntryFocus",handleEntryFocus)}),[handleEntryFocus]),(0,react.createElement)($d7bdfb9eb0fdf311$var$RovingFocusProvider,{scope:__scopeRovingFocusGroup,orientation,dir:direction,loop,currentTabStopId,onItemFocus:(0,react.useCallback)((tabStopId=>setCurrentTabStopId(tabStopId)),[setCurrentTabStopId]),onItemShiftTab:(0,react.useCallback)((()=>setIsTabbingBackOut(!0)),[]),onFocusableItemAdd:(0,react.useCallback)((()=>setFocusableItemsCount((prevCount=>prevCount+1))),[]),onFocusableItemRemove:(0,react.useCallback)((()=>setFocusableItemsCount((prevCount=>prevCount-1))),[])},(0,react.createElement)(react_primitive_dist.WV.div,(0,esm_extends.Z)({tabIndex:isTabbingBackOut||0===focusableItemsCount?-1:0,"data-orientation":orientation},groupProps,{ref:composedRefs,style:{outline:"none",...props.style},onMouseDown:(0,primitive_dist.M)(props.onMouseDown,(()=>{isClickFocusRef.current=!0})),onFocus:(0,primitive_dist.M)(props.onFocus,(event=>{const isKeyboardFocus=!isClickFocusRef.current;if(event.target===event.currentTarget&&isKeyboardFocus&&!isTabbingBackOut){const entryFocusEvent=new CustomEvent("rovingFocusGroup.onEntryFocus",$d7bdfb9eb0fdf311$var$EVENT_OPTIONS);if(event.currentTarget.dispatchEvent(entryFocusEvent),!entryFocusEvent.defaultPrevented){const items=getItems().filter((item=>item.focusable));$d7bdfb9eb0fdf311$var$focusFirst([items.find((item=>item.active)),items.find((item=>item.id===currentTabStopId)),...items].filter(Boolean).map((item=>item.ref.current)))}}isClickFocusRef.current=!1})),onBlur:(0,primitive_dist.M)(props.onBlur,(()=>setIsTabbingBackOut(!1)))})))})),$d7bdfb9eb0fdf311$export$ab9df7c53fe8454=(0,react.forwardRef)(((props,forwardedRef)=>{const{__scopeRovingFocusGroup,focusable=!0,active=!1,tabStopId,...itemProps}=props,autoId=function $1746a345f3d73bb7$export$f680877a34711e37(deterministicId){const[id,setId]=react.useState($1746a345f3d73bb7$var$useReactId());return(0,react_use_layout_effect_dist.b)((()=>{deterministicId||setId((reactId=>null!=reactId?reactId:String($1746a345f3d73bb7$var$count++)))}),[deterministicId]),deterministicId||(id?`radix-${id}`:"")}(),id=tabStopId||autoId,context=$d7bdfb9eb0fdf311$var$useRovingFocusContext("RovingFocusGroupItem",__scopeRovingFocusGroup),isCurrentTabStop=context.currentTabStopId===id,getItems=$d7bdfb9eb0fdf311$var$useCollection(__scopeRovingFocusGroup),{onFocusableItemAdd,onFocusableItemRemove}=context;return(0,react.useEffect)((()=>{if(focusable)return onFocusableItemAdd(),()=>onFocusableItemRemove()}),[focusable,onFocusableItemAdd,onFocusableItemRemove]),(0,react.createElement)($d7bdfb9eb0fdf311$var$Collection.ItemSlot,{scope:__scopeRovingFocusGroup,id,focusable,active},(0,react.createElement)(react_primitive_dist.WV.span,(0,esm_extends.Z)({tabIndex:isCurrentTabStop?0:-1,"data-orientation":context.orientation},itemProps,{ref:forwardedRef,onMouseDown:(0,primitive_dist.M)(props.onMouseDown,(event=>{focusable?context.onItemFocus(id):event.preventDefault()})),onFocus:(0,primitive_dist.M)(props.onFocus,(()=>context.onItemFocus(id))),onKeyDown:(0,primitive_dist.M)(props.onKeyDown,(event=>{if("Tab"===event.key&&event.shiftKey)return void context.onItemShiftTab();if(event.target!==event.currentTarget)return;const focusIntent=function $d7bdfb9eb0fdf311$var$getFocusIntent(event,orientation,dir){const key=function $d7bdfb9eb0fdf311$var$getDirectionAwareKey(key,dir){return"rtl"!==dir?key:"ArrowLeft"===key?"ArrowRight":"ArrowRight"===key?"ArrowLeft":key}(event.key,dir);return"vertical"===orientation&&["ArrowLeft","ArrowRight"].includes(key)||"horizontal"===orientation&&["ArrowUp","ArrowDown"].includes(key)?void 0:$d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT[key]}(event,context.orientation,context.dir);if(void 0!==focusIntent){event.preventDefault();let candidateNodes=getItems().filter((item=>item.focusable)).map((item=>item.ref.current));if("last"===focusIntent)candidateNodes.reverse();else if("prev"===focusIntent||"next"===focusIntent){"prev"===focusIntent&&candidateNodes.reverse();const currentIndex=candidateNodes.indexOf(event.currentTarget);candidateNodes=context.loop?function $d7bdfb9eb0fdf311$var$wrapArray(array,startIndex){return array.map(((_,index)=>array[(startIndex+index)%array.length]))}(candidateNodes,currentIndex+1):candidateNodes.slice(currentIndex+1)}setTimeout((()=>$d7bdfb9eb0fdf311$var$focusFirst(candidateNodes)))}}))})))})),$d7bdfb9eb0fdf311$var$MAP_KEY_TO_FOCUS_INTENT={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"};function $d7bdfb9eb0fdf311$var$focusFirst(candidates){const PREVIOUSLY_FOCUSED_ELEMENT=document.activeElement;for(const candidate of candidates){if(candidate===PREVIOUSLY_FOCUSED_ELEMENT)return;if(candidate.focus(),document.activeElement!==PREVIOUSLY_FOCUSED_ELEMENT)return}}const $d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9=$d7bdfb9eb0fdf311$export$8699f7c8af148338,$d7bdfb9eb0fdf311$export$6d08773d2e66f8f2=$d7bdfb9eb0fdf311$export$ab9df7c53fe8454,$b3bbe2732c13b576$export$bea8ebba691c5813=(0,react.forwardRef)(((props,forwardedRef)=>{const{pressed:pressedProp,defaultPressed=!1,onPressedChange,...buttonProps}=props,[pressed=!1,setPressed]=(0,react_use_controllable_state_dist.T)({prop:pressedProp,onChange:onPressedChange,defaultProp:defaultPressed});return(0,react.createElement)(react_primitive_dist.WV.button,(0,esm_extends.Z)({type:"button","aria-pressed":pressed,"data-state":pressed?"on":"off","data-disabled":props.disabled?"":void 0},buttonProps,{ref:forwardedRef,onClick:(0,primitive_dist.M)(props.onClick,(()=>{props.disabled||setPressed(!pressed)}))}))})),[$6c1fd9e6a8969628$var$createToggleGroupContext,$6c1fd9e6a8969628$export$d1c7c4bcd9f26dd4]=(0,dist.b)("ToggleGroup",[$d7bdfb9eb0fdf311$export$c7109489551a4f4]),$6c1fd9e6a8969628$var$useRovingFocusGroupScope=$d7bdfb9eb0fdf311$export$c7109489551a4f4(),$6c1fd9e6a8969628$export$af3ec21f6cfb5e30=react.forwardRef(((props,forwardedRef)=>{const{type,...toggleGroupProps}=props;if("single"===type){const singleProps=toggleGroupProps;return react.createElement($6c1fd9e6a8969628$var$ToggleGroupImplSingle,(0,esm_extends.Z)({},singleProps,{ref:forwardedRef}))}if("multiple"===type){const multipleProps=toggleGroupProps;return react.createElement($6c1fd9e6a8969628$var$ToggleGroupImplMultiple,(0,esm_extends.Z)({},multipleProps,{ref:forwardedRef}))}throw new Error("Missing prop `type` expected on `ToggleGroup`")})),[$6c1fd9e6a8969628$var$ToggleGroupValueProvider,$6c1fd9e6a8969628$var$useToggleGroupValueContext]=$6c1fd9e6a8969628$var$createToggleGroupContext("ToggleGroup"),$6c1fd9e6a8969628$var$ToggleGroupImplSingle=react.forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},...toggleGroupSingleProps}=props,[value,setValue]=(0,react_use_controllable_state_dist.T)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange});return react.createElement($6c1fd9e6a8969628$var$ToggleGroupValueProvider,{scope:props.__scopeToggleGroup,type:"single",value:value?[value]:[],onItemActivate:setValue,onItemDeactivate:react.useCallback((()=>setValue("")),[setValue])},react.createElement($6c1fd9e6a8969628$var$ToggleGroupImpl,(0,esm_extends.Z)({},toggleGroupSingleProps,{ref:forwardedRef})))})),$6c1fd9e6a8969628$var$ToggleGroupImplMultiple=react.forwardRef(((props,forwardedRef)=>{const{value:valueProp,defaultValue,onValueChange=()=>{},...toggleGroupMultipleProps}=props,[value1=[],setValue]=(0,react_use_controllable_state_dist.T)({prop:valueProp,defaultProp:defaultValue,onChange:onValueChange}),handleButtonActivate=react.useCallback((itemValue=>setValue(((prevValue=[])=>[...prevValue,itemValue]))),[setValue]),handleButtonDeactivate=react.useCallback((itemValue=>setValue(((prevValue=[])=>prevValue.filter((value=>value!==itemValue))))),[setValue]);return react.createElement($6c1fd9e6a8969628$var$ToggleGroupValueProvider,{scope:props.__scopeToggleGroup,type:"multiple",value:value1,onItemActivate:handleButtonActivate,onItemDeactivate:handleButtonDeactivate},react.createElement($6c1fd9e6a8969628$var$ToggleGroupImpl,(0,esm_extends.Z)({},toggleGroupMultipleProps,{ref:forwardedRef})))})),[$6c1fd9e6a8969628$var$ToggleGroupContext,$6c1fd9e6a8969628$var$useToggleGroupContext]=$6c1fd9e6a8969628$var$createToggleGroupContext("ToggleGroup"),$6c1fd9e6a8969628$var$ToggleGroupImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeToggleGroup,disabled=!1,rovingFocus=!0,orientation,dir,loop=!0,...toggleGroupProps}=props,rovingFocusGroupScope=$6c1fd9e6a8969628$var$useRovingFocusGroupScope(__scopeToggleGroup),direction=$f631663db3294ace$export$b39126d51d94e6f3(dir),commonProps={role:"group",dir:direction,...toggleGroupProps};return react.createElement($6c1fd9e6a8969628$var$ToggleGroupContext,{scope:__scopeToggleGroup,rovingFocus,disabled},rovingFocus?react.createElement($d7bdfb9eb0fdf311$export$be92b6f5f03c0fe9,(0,esm_extends.Z)({asChild:!0},rovingFocusGroupScope,{orientation,dir:direction,loop}),react.createElement(react_primitive_dist.WV.div,(0,esm_extends.Z)({},commonProps,{ref:forwardedRef}))):react.createElement(react_primitive_dist.WV.div,(0,esm_extends.Z)({},commonProps,{ref:forwardedRef})))})),$6c1fd9e6a8969628$export$b453109e13abe10b=react.forwardRef(((props,forwardedRef)=>{const valueContext=$6c1fd9e6a8969628$var$useToggleGroupValueContext("ToggleGroupItem",props.__scopeToggleGroup),context=$6c1fd9e6a8969628$var$useToggleGroupContext("ToggleGroupItem",props.__scopeToggleGroup),rovingFocusGroupScope=$6c1fd9e6a8969628$var$useRovingFocusGroupScope(props.__scopeToggleGroup),pressed=valueContext.value.includes(props.value),disabled=context.disabled||props.disabled,commonProps={...props,pressed,disabled},ref=react.useRef(null);return context.rovingFocus?react.createElement($d7bdfb9eb0fdf311$export$6d08773d2e66f8f2,(0,esm_extends.Z)({asChild:!0},rovingFocusGroupScope,{focusable:!disabled,active:pressed,ref}),react.createElement($6c1fd9e6a8969628$var$ToggleGroupItemImpl,(0,esm_extends.Z)({},commonProps,{ref:forwardedRef}))):react.createElement($6c1fd9e6a8969628$var$ToggleGroupItemImpl,(0,esm_extends.Z)({},commonProps,{ref:forwardedRef}))})),$6c1fd9e6a8969628$var$ToggleGroupItemImpl=react.forwardRef(((props,forwardedRef)=>{const{__scopeToggleGroup,value,...itemProps}=props,valueContext=$6c1fd9e6a8969628$var$useToggleGroupValueContext("ToggleGroupItem",__scopeToggleGroup),singleProps={role:"radio","aria-checked":props.pressed,"aria-pressed":void 0},typeProps="single"===valueContext.type?singleProps:void 0;return react.createElement($b3bbe2732c13b576$export$bea8ebba691c5813,(0,esm_extends.Z)({},typeProps,itemProps,{ref:forwardedRef,onPressedChange:pressed=>{pressed?valueContext.onItemActivate(value):valueContext.onItemDeactivate(value)}}))}))}}]);