/**
 * Created by oscar on 2/05/17.
 */
$(document).ready(function(){
    $('.nav-pills a').click(function(){
        $(this).tab('show');
    });
// The on tab shown event
    $('.nav-pills a').on('shown.bs.tab', function (e) {

        var current_tab = current_tab = e.target;
        var previous_tab = e.relatedTarget;
    });
});