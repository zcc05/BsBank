/**
 * Created by Cheng on 2016/7/2.
 */
$(function(){
    //Ҫ����������
    var box = document.getElementById("box");
    var arr = document.getElementById("arr");
    var arrRight = document.getElementById("right");
    var arrLeft = document.getElementById("left");
    var screen = box.children[0];
    var ul = screen.children[0];
    var ol = screen.children[1];
    var ulLis = ul.children;
    var imgWidth = screen.offsetWidth;
    //alert(imgWidth);

    //1.��̬���ɽṹ
    //1.1����ͼƬ������̬���ɰ�ť
    for (var i = 0; i < ulLis.length; i++) {
        //���ɰ�ť
        var li = document.createElement("li");
        //������ �������Ǵ�0��ʼ�� ����Ҫ��һ
//                    li.innerHTML = i + 1;
        ol.appendChild(li);
    }
    //1.2������ɺ���ܻ�ȡ
    var olLis = ol.children;
    //��ʱ�ȸ���һ����ť�����ʽ
    olLis[0].className = "current";

    //1.3��̬�Ŀ�¡��һ��ͼƬ��׷�ӵ����
    var firstImg = ulLis[0].cloneNode(true);
    ul.appendChild(firstImg);

    //2.��꾭����ť
    // ��ÿһ����ť����꾭���¼� �¼��ǰ�ť���� ���ҽ�ͼƬ�ƶ���ָ��λ��
    for (var j = 0; j < olLis.length; j++) {
        olLis[j].index = j;
        olLis[j].onmouseover = function () {
            //�ɵ�������
            for (var k = 0; k < olLis.length; k++) {
                olLis[k].className = "";
            }
            //�������Լ�
            this.className = "current";

            //��ͼƬ�������ƶ���ָ��λ��
            //target �� ��ǰ��ť������ �� ͼƬ�Ŀ�� �й� �����Ǹ���
            var target = -this.index * imgWidth;
            animate(ul, target);
        }
    }



    //3.�������ͷ
    //��꾭������ ��ʾarr ����뿪���� ����arr
    box.onmouseover = function () {
        arr.style.display = "block";
    }
    box.onmouseout = function () {
        arr.style.display = "none";
    }
    //����Ҳ��ͷ ��ul�������ƶ�����Ӧλ��
    var pic = 0;//���ڴ��浱ǰӦ�����ǵ�ͼƬ������
    var square = 0;//���ڴ��浱ǰӦ������İ�ť������

    arrRight.onclick = function () {
        playNext();
    }
    arrLeft.onclick = function () {
        //�жϱ߽� ����ǵ�һ��ͼƬ ��Ӧ�ñ�Ϊ�ٵĵ�һ��
        //��ul������� picҲҪ�������
        if (pic == 0) {
            //˲���Ϊ�ٵĵ�һ��
            ul.style.left = -imgWidth * (ulLis.length - 1) + "px";
            pic = ulLis.length - 1;
        }
        pic--;
        //target �� pic�й� �� ͼƬ��� �����Ǹ���
        var target = -pic * imgWidth;
        animate(ul, target);
    }


    //4.����Զ�����
    //�൱��ÿ���Ӱ���һ���Ҽ�ͷ
    setInterval(playNext, 4000);


    function playNext() {
        //�жϱ߽� ��������һ��ͼƬ���ٵĵ�һ�ţ�������
        //��ul���ؿ�ʼ picҲҪ����ȥ
        if (pic == ulLis.length - 1) {
            ul.style.left = 0;
            pic = 0;
        }
        pic++;
        //target �� pic�й� �� ͼƬ��� �����Ǹ���
        var target = -pic * imgWidth;
        animate(ul, target);

        //��ťҲӦ��������Ӧ���Ǹ�

        //�жϱ߽�
        //���sqaureС�����һ����ť�������Ų����Լ� �����ͷ��ʼ
        if (square < olLis.length - 1) {
            square++;
        } else {
            square = 0;
        }
        //�ɵ�������
        for (var i = 0; i < olLis.length; i++) {
            olLis[i].className = "";
        }
        //���µ�ǰ��
        olLis[square].className = "current";

    }

    function animate(obj, target) {
        clearInterval(obj.timer);//Ϊ�˷�ֹ�ظ����� ������һ��
        obj.timer = setInterval(function () {
            var leader = obj.offsetLeft;//��ȡ����ǰλ��
            //������ left��ֵԽ��Խ�� step ����
            //������ left��ֵԽ��ԽС step ����
            //���leader < target leader ����� ��Ӧ��������
            var step = 25;
            /*if (leader < target) {
             step = step;
             } else {
             step = -step;
             }*/
            step = leader < target ? step : -step;//�ж϶����ƶ��ķ���
            //�ж��յ� ���û���յ��ִ�ж���
            //Math.abs(leader - target) ����ǰλ�ú�target�ľ���
            //���������ڲ��� ˵�������Լ����ƶ� ����˵������һ���ͳ����յ���
            if (Math.abs(leader - target) > Math.abs(step)) {
                //leader = leader + step
                obj.style.left = leader + step + "px";
            } else {
                clearInterval(obj.timer);
                //�ֶ�����Ҫ�����յ�Ķ���ŵ��յ�
                obj.style.left = target + "px";
            }
        }, 25)
    }



    ////////////////////////////////////////////////////////////////////////////
    //��Ʒ�л�����
    $(function(){
        // 1. ��tab���˵� ����������¼�
        $(".products-l>ul>li").mouseenter(function(){
            // ����ǰ���Ԫ������࣬���ֵ�Ԫ���Ƴ������
            $(this).addClass("zimp").siblings().removeClass("zimp");
            // �ò˵���Ӧ������չʾ�����������ݵ��ֵ�����
            var index = $(this).index();
            $(".productsall>div")
                .eq(index).show().siblings('div').hide();
        });
    });

    //�ֲ�ͼ
    $(function(){
        // 1. ��tab���˵� ����������¼�
        $(".content-m-l-top>div").mouseenter(function(){
            // ����ǰ���Ԫ������࣬���ֵ�Ԫ���Ƴ������
            $(this).addClass("new").siblings().removeClass("new");
            $(this).children("i").show();
            $(this).siblings().children("i").hide();
            // �ò˵���Ӧ������չʾ�����������ݵ��ֵ�����
            var index = $(this).index();
            $(".banner")
                .eq(index).show().siblings('.banner').hide();
        });

    });
    //��������
    var speed=40;
    demo2.innerHTML=demo1.innerHTML;
    function Marquee(){
        if(demo2.offsetTop-demo.scrollTop<=0)
            demo.scrollTop-=demo1.offsetHeight;
        else{
            demo.scrollTop++;
        }
    }
    var MyMar=setInterval(Marquee,speed);
    demo.onmouseover=function() {clearInterval(MyMar)};
    demo.onmouseout=function() {MyMar=setInterval(Marquee,speed)};

})