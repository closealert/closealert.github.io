(function($) {
  var id = 'YOUR_ID';
  $(document).ready(function() {

    // Read id from hash
    if(document.location.hash && document.location.hash.indexOf('id=')!==-1) {
      id = document.location.hash.split('id=')[1];
      $('#setting-id').val(id);
    }

    function updateSetting(settingInputElementId, value) {
      if(typeof value=='undefined') {
        value = $('#'+settingInputElementId).val();
      }
      $('#'+settingInputElementId+'-output').show();
      $('#'+settingInputElementId+'-output').html(value);
    }

    $('form#customize :input').on('change', function() {
      updateSetting($(this).attr('id'), $(this).val());
    });

    updateSetting('setting-id');
    // updateSetting('setting-icons');
    // updateSetting('setting-language');
    // updateSetting('setting-position');
    // updateSetting('setting-noemail');
    // updateSetting('setting-mobile');
  });
})(jQuery);