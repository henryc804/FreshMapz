var main = function() {
    //
    //Days of the Week Buttons
    //
    $($('#Mon')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Mon');
        } else if (checked !== true) {
            var index = checkList.indexOf('Mon');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Tue')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Tue');
        } else if (checked !== true) {
            var index = checkList.indexOf('Tue');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Wed')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Wed');
        } else if (checked !== true) {
            var index = checkList.indexOf('Wed');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Thu')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Thu');
        } else if (checked !== true) {
            var index = checkList.indexOf('Thu');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Fri')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Fri');
        } else if (checked !== true) {
            var index = checkList.indexOf('Fri');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Sat')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Sat');
        } else if (checked !== true) {
            var index = checkList.indexOf('Sat');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Sun')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Sun');
        } else if (checked !== true) {
            var index = checkList.indexOf('Sun');
            checkList.splice(index, 1);
        }
        update();
    });
    //
    //go button
    //
    $('#findButton').click(function() {
        var text_input = $('#findButtonInput').val();
        text_input = parseInt(text_input);
        console.log(text_input);
        if (typeof(text_input) === 'number') {
            if (text_input > 0 && text_input < 8536) {
                locate(text_input);
            } else if (text_input > 8535) {
                locate(8534);
            } else if (text_input < 1) {
                locate(0);
            }
        } else {
            $('#findButtonInput').val('');
        }
        $('#findButtonInput').val('');
    });

    //
    //Benefit/Pay Buttons
    //
    $($('#Credit_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Credit');
        } else if (checked !== true) {
            var index = checkList.indexOf('Credit');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#WIC_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('WIC');
        } else if (checked !== true) {
            var index = checkList.indexOf('WIC');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#WIC_Cash_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('WICcash');
        } else if (checked !== true) {
            var index = checkList.indexOf('WICcash');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#SFMNP_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('SFMNP');
        } else if (checked !== true) {
            var index = checkList.indexOf('SFMNP');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#SNAP_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('SNAP');
        } else if (checked !== true) {
            var index = checkList.indexOf('SNAP');
            checkList.splice(index, 1);
        }
        update();
    });

    //
    //Food Type Buttons
    //

    $($('#Organic_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Organic');
        } else if (checked !== true) {
            var index = checkList.indexOf('Organic');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Bakedgoods_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Bakedgoods');
        } else if (checked !== true) {
            var index = checkList.indexOf('Bakedgoods');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Cheese_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Cheese');
        } else if (checked !== true) {
            var index = checkList.indexOf('Cheese');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Crafts_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Crafts');
        } else if (checked !== true) {
            var index = checkList.indexOf('Crafts');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Flowers_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Flowers');
        } else if (checked !== true) {
            var index = checkList.indexOf('Flowers');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Eggs_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Eggs');
        } else if (checked !== true) {
            var index = checkList.indexOf('Eggs');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Seafood_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Seafood');
        } else if (checked !== true) {
            var index = checkList.indexOf('Seafood');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Herbs_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Herbs');
        } else if (checked !== true) {
            var index = checkList.indexOf('Herbs');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Vegetables_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Vegetables');
        } else if (checked !== true) {
            var index = checkList.indexOf('Vegetables');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Honey_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Honey');
        } else if (checked !== true) {
            var index = checkList.indexOf('Honey');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Jams_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Jams');
        } else if (checked !== true) {
            var index = checkList.indexOf('Jams');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Maple_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Maple');
        } else if (checked !== true) {
            var index = checkList.indexOf('Maple');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Meat_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Meat');
        } else if (checked !== true) {
            var index = checkList.indexOf('Meat');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Nursery_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Nursery');
        } else if (checked !== true) {
            var index = checkList.indexOf('Nursery');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Nuts_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Nuts');
        } else if (checked !== true) {
            var index = checkList.indexOf('Nuts');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Plants_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Plants');
        } else if (checked !== true) {
            var index = checkList.indexOf('Plants');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Poultry_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Poultry');
        } else if (checked !== true) {
            var index = checkList.indexOf('Poultry');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Prepared_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Prepared');
        } else if (checked !== true) {
            var index = checkList.indexOf('Prepared');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Soap_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Soap');
        } else if (checked !== true) {
            var index = checkList.indexOf('Soap');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Trees_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Trees');
        } else if (checked !== true) {
            var index = checkList.indexOf('Trees');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Wine_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Wine');
        } else if (checked !== true) {
            var index = checkList.indexOf('Wine');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Coffee_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Coffee');
        } else if (checked !== true) {
            var index = checkList.indexOf('Coffee');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Beans_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Beans');
        } else if (checked !== true) {
            var index = checkList.indexOf('Beans');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Fruits_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Fruits');
        } else if (checked !== true) {
            var index = checkList.indexOf('Fruits');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Grains_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Grains');
        } else if (checked !== true) {
            var index = checkList.indexOf('Grains');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Juices_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Juices');
        } else if (checked !== true) {
            var index = checkList.indexOf('Juices');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Mushrooms_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Mushrooms');
        } else if (checked !== true) {
            var index = checkList.indexOf('Mushrooms');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#PetFood_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('PetFood');
        } else if (checked !== true) {
            var index = checkList.indexOf('PetFood');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#Tofu_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('Tofu');
        } else if (checked !== true) {
            var index = checkList.indexOf('Tofu');
            checkList.splice(index, 1);
        }
        update();
    });
    $($('#WildHarvested_Check')).click(function() {
        var checked = $(this).prop('checked');
        if (checked === true) {
            checkList.push('WildHarvested');
        } else if (checked !== true) {
            var index = checkList.indexOf('WildHarvested');
            checkList.splice(index, 1);
        }
        update();
    });

};

$(document).ready(main);
