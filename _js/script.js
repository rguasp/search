$(document).ready(function() {
    // Polyfill for Reversed Attribute on Lists by Jonathan Sampson | http://sampsonblog.com/532/polyfill-for-reversed-attribute-on-lists
    (function () {
    if ( $("<ol>").prop("reversed") === undefined ) {
        $("ol[reversed]").each(function () {
            var $items = $(this).find("li");
            $items.attr("value", function ( index ) {
                return $items.length - index;
            });
        });
        }  
    });
    $('.id').hide();
    $('.identity').hide(); 
    $('#question').change(function() {
        $('.identity').hide(); 
        $('#identity').empty();
        $('.id').hide();
        $('#id').empty();
        if (
            $(this).val()==="Medical Benefits"
        ) {
            $('.identity').show(); 
            $('#identity').append('<option value="" selected="selected">- Select -</option><option value="A Benefit Administrator">A Benefit Administrator</option><option value="A Provider">A Provider</option><option value="A Member">A Member</option><option value="An Agency Contact">An Agency Contact</option>');
        }
        if (
            $(this).val()==="Pharmacy Benefits"
        ) {
            $('.identity').show(); 
            $('#identity').append('<option value="" selected="selected">- Select -</option><option value="A Benefit Administrator">A Benefit Administrator</option><option value="A Member">A Member</option><option value="An Agency Contact">An Agency Contact</option>');
        }
        if (
            $(this).val()==="Eligibility"
        ) {
            $('.identity').show(); 
            $('#identity').append('<option value="" selected="selected">- Select -</option><option value="A Benefit Administrator">A Benefit Administrator</option><option value="A Member">A Member</option><option value="An Agency Contact">An Agency Contact</option>');
        }
        if (
            $(this).val()==="Workers Compensation"
        ) {
            $('.identity').show(); 
            $('#identity').append('<option value="" selected="selected">- Select -</option><option value="An Agency Contact">An Agency Contact</option><option value="A Claimant">A Claimant</option>');
        }
        if (
            $(this).val()==="Auto/PIP"
        ) {
            $('.identity').show(); 
            $('#identity').append('<option value="" selected="selected">- Select -</option><option value="An Agency Contact">An Agency Contact</option><option value="An Adjuster or Case Manager">An Adjuster or Case Manager</option><option value="A Claimant">A Claimant</option>');
        }
        if (
            $(this).val()==="Member Portal Help"
        ) {
            $('.id').show(); 
        }
        if (
            $(this).val()==="Request Replacement Card"
        ) {
            $('.id').show(); 
        }
    });
    $('#identity').change(function() {
        if (
            $('#question').val()==="Medical Benefits" && $(this).val()==="A Member"   
        ) {
            $('.id').show();   
        } else if (
            $('#question').val()==="Pharmacy Benefits" && $(this).val()==="A Member"   
        ) {
            $('.id').show();   
        } else if (
            $('#question').val()==="Eligibility" && $(this).val()==="A Member"   
        ) {
            $('.id').show();   
        } else if (
            $('#question').val()==="Workers Compensation" && $(this).val()==="A Claimant"   
        ) {
            $('.id').show();   
        } else if (
            $('#question').val()==="Auto/PIP" && $(this).val()==="A Claimant"   
        ) {
            $('.id').show();   
        } else {
            $('.id').hide();   
        }
    });
    $('.primary').mouseover(function(){
            $('.secondary').show(); 
    });
    $('.primary').mouseout(function(){
            $('.secondary').hide(); 
    });
})