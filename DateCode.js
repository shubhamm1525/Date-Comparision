<!-- JS Controller Side Code -->

photoStartDateValidate: function(component, event, helper) {
      var ErrorMessage = 'Start date should be less than End date';
      var startDate = event.getSource().get("v.value");
      var endDate = component.get("v.PSO.Principal_Photography_End_Date__c");
      var end = new Date(endDate);
      var start = new Date(startDate);  
      if(endDate != null){
          if (end <= start) {                 
                helper.DateErrorHelper(component, event, helper, ErrorMessage);
          }
      }
  },

  prodStartDateValidate: function(component, event, helper) {
      var ErrorMessage = 'Start date should be less than End date';
      var startDate = event.getSource().get("v.value");
      var endDate = component.get("v.PSO.Post_Production_End_Date__c");
      var end = new Date(endDate);
      var start = new Date(startDate);  
      if(endDate != null){
          if (end <= start) {                 
                helper.DateErrorHelper(component, event, helper, ErrorMessage);
          }
      }
  },
