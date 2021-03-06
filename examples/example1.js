

angular.module('demo1', ['bootstrapLightbox']);

angular.module('demo1').controller('GalleryCtrl', function ($scope, Lightbox) {
  $scope.images = [
    {
      'url': 'https://farm6.staticflickr.com/5830/20552523531_e1efec8d49_k.jpg',
      'thumbUrl': 'https://farm6.staticflickr.com/5830/20552523531_ef720cd2f1_s.jpg',
      'caption': 'This image has dimensions 2048x1519 and the img element is scaled to fit inside the window.'
    },
    {
      'url': 'https://farm8.staticflickr.com/7300/12807911134_ff56d1fb3b_b.jpg',
      'thumbUrl': 'https://farm8.staticflickr.com/7300/12807911134_ff56d1fb3b_s.jpg'
    },
    {
      'url': 'https://farm1.staticflickr.com/400/20228789791_52fb84917f_b.jpg',
      'thumbUrl': 'https://farm1.staticflickr.com/400/20228789791_52fb84917f_s.jpg',
      'caption': 'The left and right arrow keys are binded for navigation. The escape key for closing the modal is binded by AngularUI Bootstrap.'
    },
    {
      'url': 'https://farm1.staticflickr.com/260/20185156095_912c2714ef_b.jpg',
      'thumbUrl': 'https://farm1.staticflickr.com/260/20185156095_912c2714ef_s.jpg'
    },
    {
      'url': 'https://farm6.staticflickr.com/5757/20359334789_57316968ed_m.jpg',
      'thumbUrl': 'https://farm6.staticflickr.com/5757/20359334789_57316968ed_s.jpg',
      'caption': 'Default minimum modal dimensions (400x200) apply for this image (240x95).'
    },
    {
      'url': 'https://farm1.staticflickr.com/359/18741723375_28c89372d7_c.jpg',
      'thumbUrl': 'https://farm1.staticflickr.com/359/18741723375_28c89372d7_s.jpg'
    },
    {
      'url': 'https://farm6.staticflickr.com/5606/15425945368_6f6ae945fc.jpg',
      'thumbUrl': 'https://farm6.staticflickr.com/5606/15425945368_6f6ae945fc_s.jpg'
    },
    ];

  $scope.openLightboxModal = function (index) {
    Lightbox.openModal($scope.images, index);
  };

});
