import React from 'react';

const Context = React.createContext({
  contextName: '',
  contextSetName: () => null, // NoOp
  contextEmail: '',
});

export default Context;