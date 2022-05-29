(function () {
    "use strict";

    Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI2MDRmZGJlZi1iMmZhLTQ3YzAtYmM5OC02MGZiZTA3MTRlNmEiLCJpZCI6OTU1NTAsImlhdCI6MTY1Mzc5MTU2N30.Y1vvVp3vyLjU8czzZH--9Nqq47Q7q2B2YU0RuriNHDo";
    var viewer = new Cesium.Viewer("cesium",
        {
            imageryProvider: new Cesium.OpenStreetMapImageryProvider({
                url: 'https://tile.openstreetmap.jp/'
            })
        }
    );
      viewer.scene.primitives.add(Cesium.createOsmBuildings());
    // viewer.scene.primitives.add(
    //     new Cesium.Cesium3DTileset({
    //         url: Cesium.IonResource.fromAssetId(1068483),
    //     })
    // );

    //初期の視点（カメラ）の位置 日本の上空にカメラが来るように設定。
    viewer.camera.setView({
        destination: Cesium.Cartesian3.fromDegrees(138, 29, 4000000),
        orientation: {
            heading: 0, // 水平方向の回転度（ラジアン）
            pitch: -1.4, // 垂直方向の回転度（ラジアン） 上を見上げたり下を見下ろしたり
            roll: 0
        }
    });

}());