require('enable-webcomponents-in-content-scripts')

const {
  get_intervention
} = require('libs_common/intervention_info')

const {
  printable_time_spent_long
} = require('libs_common/time_utils')

const {
  get_seconds_spent_on_current_domain_today
} = require('libs_common/time_spent_utils')

const {
  show_toast
} = require('libs_frontend/toast_utils')

const $ = require('jquery')

let sitename_printable = 'this site'
let intervention_info = get_intervention()
if (intervention_info.sitename_printable) {
  sitename_printable = intervention_info.sitename_printable
}

let current_toast = null

let show_new_toast = function() {
  get_seconds_spent_on_current_domain_today().then(function(seconds_spent) {
    let duration = printable_time_spent_long(seconds_spent)
    current_toast = show_toast({
      text: `You've been on ${sitename_printable} for ${duration} today`,
      duration: 5000
    })
  });
}

show_new_toast()
setInterval(show_new_toast, 60000)

let update_time = function() {
  get_seconds_spent_on_current_domain_today().then(function(seconds_spent) {
    let duration = printable_time_spent_long(seconds_spent)
    if (current_toast != null) {
      $(current_toast).attr('text', `You've been on ${sitename_printable} for ${duration} today`)
    }
  });
}

update_time()
setInterval(update_time, 1000)