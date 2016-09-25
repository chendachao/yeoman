SystemJS.config({
  packages: {
    src: {
      defaultExtension: 'ts'
    },
    typings: {
      defaultExtension: 'ts'
    }
  },
  transpiler: 'ts',
  typescriptOptions: {
    sourceMap: true,
    emitDecoratorMetadata: true,
    experimentalDecorators: true,
    removeComments: false,
    noImplicitAny: false
  }
});
