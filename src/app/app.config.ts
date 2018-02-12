export function routing($stateProvider: any ) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: require('./home/home.html'),
      controller: 'homeCtrl as ctrl',
      resolve: {
        loadModule: ($q: ng.IQService, $ocLazyLoad: oc.ILazyLoad) => {
          return $q((resolve) => {
            require(['./home/index'], (module: {default: string}) => {
              resolve($ocLazyLoad.load(module.default));
            });
          });
        }
      }
    })
    .state('about', {
      url: '/about',
      template: require('./about/about.html'),
      controller: 'aboutCtrl as ctrl',
      resolve: {
        loadModule: ($q: ng.IQService, $ocLazyLoad: oc.ILazyLoad ) => {
          return $q((resolve) => {
            require(['./about/index'], (module: {default: string}) => {
              resolve($ocLazyLoad.load(module.default));
            });
          });
        }
      }
    });
}

