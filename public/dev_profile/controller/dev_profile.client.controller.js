angular.module('developerProfile').controller('devProfileCtrl', ['$scope', 
	function($scope) {
		$scope.devProfile = [
			{
				Name: "Vanita Sajnani (10160)",
				Position: "Team Lead",
				Responsibility: "Project Management, Architecture, Designed the UI-Navigation Drawer, Profile Activity"
			},
			{
				Name: "Erwin Nieva (10903)",
				Position: "Assistant Team Lead",
				Responsibility: "Presentation, Database (including design, schema creation, administration), Server development including RESTful API, Web Client Development, Event Traffic, User Positioning"
			},
			{
				Name: "Xinyu He (Nick) (10457)",
				Position: "Team Member",
				Responsibility: "Floor Plan Draft, Way Finding, Indoor Positioning"
			},
			{
				Name: "Zhen Pang (10437)",
				Position: "Team Member",
				Responsibility: "Social Media Sharing, Floor Plan Draft"
			},
			{
				Name: "Utpal Parabhakar (13848)",
				Position: "Team Member",
				Responsibility: "Database Design, Short Message Service (SMS) functionality"
			}
		];
	}
]);