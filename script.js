$(function() {
    $('.zhan li ').draggable({ revert:true,proxy:'clone' });
    $('.zhanban  table tr td').droppable({
        onDragEnter:function(){ $(this).addClass('over'); },
        onDragLeave:function(){ $(this).removeClass('over'); },
        onDrop:function(e,source){ $(this).removeClass('over');
            if ($(source).hasClass('assigned')){ 
				$(this).empty().append(source);
				$(source).draggable({ revert:true});
            } else {
                var c = $(source).clone().addClass('assigned');
                $(this).empty().append(c);
                c.draggable({ revert:true});
            } }
    });

    $('#shanchu').droppable({
        onDragEnter:function(){ $(this).addClass('hong'); },
        onDragLeave:function(){ $(this).removeClass('hong'); },
        onDrop:function(e,source){
            if ($(source).hasClass('assigned')){ $(source).empty();}
            else{
                alert('原稿图片不允许删除！');
            }
        }
    })
});