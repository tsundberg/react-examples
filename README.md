# A playground for react-examples


Creating a new react app with typescript:

    npx create-react-app my-app --template typescript
    
Adding Enzyme    
    
    npm install --save enzyme enzyme-adapter-react-16 react-test-renderer
    
Add

```
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });
```    
    
to

    src/setupTests.ts
    
Then install    
    
    npm install --save @types/enzyme    
    
to make IDEA happy
    