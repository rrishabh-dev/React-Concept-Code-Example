import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { PostComponentWithData } from './components/PostComponent';
import { LoginComponentWithTranslation } from './components/LoginComponent';
import { DataViewerWithErrorBoundary } from './components/DataViewerComponent';
import { NewFeatureComponentWithFeatureToggle } from './components/NewFeatureComponent';
import { PrivateComponentComponentWithAuthorization } from './components/PrivateComponent';
import {
  TopicList,
  HOCExample,
  UseStateExample,
  UseEffectExample,
  UseContextExample,
  UseRefExample,
  UseMemoExample,
  UseCallbackExample,
  UseReducerExample
} from './components';
import { APICallExample } from './components/APICallExample';
import {
  IncrementHOCExample,
  StyleHOCExample
} from './components/HOCExample';
import { CountAndTitle } from './components/UseCallbackExample';
import {
  SortData,
  PreservedReferences,
  SkipHeavyComputation
} from './components/UseMemoExample';
import {
  ComplexStates,
  FormWithMultipleFields,
  MultipleStates
} from './components/UseReducerExample';
import {
  BookManagement,
  PreventPropDrilling,
  ThemeSwitch,
  UserAuthentication,
  Parent,
  Toast
} from './components/UseContextExample';
import {
  AccessDOM,
  ButtonClickCounter,
  StopWatch,
  VideoPlayer,
  ExposingRef
} from './components/UseRefExample';
import {
  Counter,
  FormInput,
  UpdatingObjects,
  ConditionalRendering
} from './components/UseStateExample';
import {
  FetchAPI,
  InputValidation,
  ListenGlobalBrowserEvent,
  LiveFilter,
  TriggerAnimation,
  UpdateFetch
} from './components/UseEffectExample';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<TopicList />} />

          {/* HOC Routes */}
          <Route path="hoc-example" element={<HOCExample />} />
          <Route path="hoc-example/authorization" element={<PrivateComponentComponentWithAuthorization userRole="guest" />} />
          <Route path="hoc-example/errorBoundary" element={<DataViewerWithErrorBoundary />} />
          <Route path="hoc-example/dataFetch" element={<PostComponentWithData />} />
          <Route path="hoc-example/featureToggle" element={<NewFeatureComponentWithFeatureToggle />} />
          <Route path="hoc-example/translation" element={<LoginComponentWithTranslation />} />
          <Route path="hoc-example/increment" element={<IncrementHOCExample />} />
          <Route path="hoc-example/style" element={<StyleHOCExample />} />

          {/* UseState Routes */}
          <Route path="useState-example" element={<UseStateExample />} />
          <Route path="useState-example/counter" element={<Counter />} />
          <Route path="useState-example/formInput" element={<FormInput />} />
          <Route path="useState-example/updatingObjects" element={<UpdatingObjects />} />
          <Route path="useState-example/conditionalRendering" element={<ConditionalRendering />} />

          {/* UseEffect Routes */}
          <Route path="useEffect-example" element={<UseEffectExample />} />
          <Route path="useEffect-example/fetchAPI" element={<FetchAPI />} />
          <Route path="useEffect-example/inputValidation" element={<InputValidation />} />
          <Route path="useEffect-example/liveFilter" element={<LiveFilter />} />
          <Route path="useEffect-example/triggerAnimation" element={<TriggerAnimation />} />
          <Route path="useEffect-example/updateFetch" element={<UpdateFetch />} />
          <Route path="useEffect-example/listenGlobalBrowserEvent" element={<ListenGlobalBrowserEvent />} />

          {/* UseContext Routes */}
          <Route path="useContext-example" element={<UseContextExample />} />
          <Route path="useContext-example/themeSwitch" element={<ThemeSwitch />} />
          <Route path="useContext-example/bookManagement" element={<BookManagement />} />
          <Route path="useContext-example/userAuthentication" element={<UserAuthentication />} />
          <Route path="useContext-example/preventPropDrilling" element={<PreventPropDrilling />} />
          <Route path="useContext-example/counter" element={<Parent />} />
          <Route path="useContext-example/toast" element={<Toast />} />

          {/* UseRef Routes */}
          <Route path="useRef-example" element={<UseRefExample />} />
          <Route path="useRef-example/accessDOM" element={<AccessDOM />} />
          <Route path="useRef-example/buttonClickCounter" element={<ButtonClickCounter />} />
          <Route path="useRef-example/stopWatch" element={<StopWatch />} />
          <Route path="useRef-example/videoPlayer" element={<VideoPlayer />} />
          <Route path="useRef-example/exposingRef" element={<ExposingRef />} />

          {/* UseReducer Routes */}
          <Route path="useReducer-example" element={<UseReducerExample />} />
          <Route path="useReducer-example/formWithMultipleFields" element={<FormWithMultipleFields />} />
          <Route path="useReducer-example/multipleStates" element={<MultipleStates />} />
          <Route path="useReducer-example/complexStates" element={<ComplexStates />} />

          {/* UseMemo Routes */}
          <Route path="useMemo-example" element={<UseMemoExample />} />
          <Route path="useMemo-example/sort" element={<SortData />} />
          <Route path="useMemo-example/preservedReferences" element={<PreservedReferences />} />
          <Route path="useMemo-example/skipHeavyComputation" element={<SkipHeavyComputation />} />

          {/* UseCallback Routes */}
          <Route path="useCallback-example" element={<UseCallbackExample />} />
          <Route path="useCallback-example/count&Title" element={<CountAndTitle />} />

          {/* API Call Routes */}
          <Route path="api-call" element={<APICallExample />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
