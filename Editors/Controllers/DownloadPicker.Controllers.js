angular.module("umbraco").controller("DownloadPicker.Controller", function ($scope, $routeParams, dialogService) {
    $scope.openMediaPicker = function () {
        dialogService.mediaPicker({ callback: populateDownloads, multiPicker: true });
    };

    $scope.removeDownload = function (download) {
        var index = $scope.control.downloads.indexOf(download);
        $scope.control.downloads.splice(index, 1);    
    };

    function populateDownloads(data) {
        $scope.control.downloads = data;
    }
});