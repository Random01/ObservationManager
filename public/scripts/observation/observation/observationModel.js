//<observation id="OM74e157598a08492c963fb10237f75eb0">
//        <observer>OM1bc08eab6b3f441b9d8b9886b759f26b</observer>
//        <site>OM912a8da2984b423eaa63fb34e3967b32</site>
//        <session>OMe1e4ad0b990140ef988e3471e63aed3e</session>
//        <target>OM87ee4b0623bf49f2a909cd44071ee82e</target>
//        <begin>2015-06-11T18:59:35+00:02</begin>
//        <seeing>3</seeing>
//        <scope>OMcb88d96076614498937d23e07902af1a</scope>
//        <result lang="en" xsi:type="oal:findingsDeepSkyType">
//            <description><![CDATA[]]></description>
//            <rating>2</rating>
//        </result>
//    </observation>

angular.module('observationManager.observation').factory('omObservation', function () {
    var observation = function() {

    };

    observation.prototype.observer = null;

    observation.prototype.site = null;

    observation.prototype.session = null;

    observation.prototype.target = null;

    observation.prototype.begin = null;

    observation.prototype.scope = null;

    return observation;
});