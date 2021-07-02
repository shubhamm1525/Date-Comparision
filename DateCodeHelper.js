<!-- Helper side Code -->


DateErrorHelper: function(component, event, helper,ErrorMessage){
   var toastEvent = $A.get("e.force:showToast");
   toastEvent.setParams({
                title : 'Warning',
                message: ErrorMessage,
                duration:' 5000',
                key: 'info_alt',
                type: 'warning',
                mode: 'sticky'
            });
   toastEvent.fire();
},
