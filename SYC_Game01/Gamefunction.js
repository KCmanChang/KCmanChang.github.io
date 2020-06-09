// 1.按鈕設定消除線起始值與開始移動
function start_game(){
    begin_time = document.getElementById("cnt_time").value;
    if (begin_time == ''){
        alert("請輸入限制時間！");
    }else{
        set_game();
    }
}

function set_game() {

    line_status = 1;
    var line_position = document.getElementById('main_line');
    // console.log(line_position);
    line_position.style.top = 60 + 'px';
    line_ctrl = setInterval('line_move()', 0);
    arrow_ctrl = setInterval('rand_arrow()', 800);
    line_hit_arrow = setInterval('impact()', 0);
    count_down();
    var main_view = document.getElementById('game_view');
    arrow_count = 0;
}

// 2.按鈕設定消除線停止移動
function end_game() {
    clearInterval(line_ctrl);
    clearInterval(arrow_ctrl);
    clearInterval(line_hit_arrow);
    window.location.reload();
}

// 3.設定消除線移動方式
function line_move() {
    var line_position = document.getElementById('main_line');
    var y = line_position.offsetTop;
    if (line_status == 1) {
        // 3.1向下移動判定
        if (y > 526) {
            line_status = 0;
            // console.log(y);
        } else {
            y = y + 1;
            line_position.style.top = y + 'px';
            // console.log(y);
        }
    } else if (line_status == 0) {
        // 3.2向上移動判定
        if (y < 60) {
            line_status = 1;
            // console.log(y);
        } else {
            y = y - 1;
            line_position.style.top = y + 'px';
            // console.log(y);
        }
    }
}

// 4.設定隨機產生圖片
// 5.設定圖片隨機位置
var arrow_1 = 0;
var arrow_2 = 0;
var arrow_3 = 0;
var arrow_4 = 0;
var arrow_5 = 0;
var arrow_6 = 0;
var arrow_7 = 0;
var arrow_8 = 0;
var arrow_9 = 0;
var arrow_10 = 0;
var arrow_keycode_1 = 0;
var arrow_keycode_2 = 0;
var arrow_keycode_3 = 0;
var arrow_keycode_4 = 0;
var arrow_keycode_5 = 0;
var arrow_keycode_6 = 0;
var arrow_keycode_7 = 0;
var arrow_keycode_8 = 0;
var arrow_keycode_9 = 0;
var arrow_keycode_10 = 0;

function rand_arrow() {
    while (arrow_count < 10) {
        var arrow_matrix = [];
        arrow_matrix[0] = "Image/ArrowIcon/UpArrow.png";
        arrow_matrix[1] = "Image/ArrowIcon/DownArrow.png";
        arrow_matrix[2] = "Image/ArrowIcon/LeftArrow.png";
        arrow_matrix[3] = "Image/ArrowIcon/RightArrow.png";
        var rand_amount = Math.round(Math.random() * 3);
        var x;
        var y;
        var main_view = document.getElementById('game_view');
        if (arrow_1 == 0) {
            arrow_image_1 = document.createElement('img');
            arrow_image_1.src = arrow_matrix[rand_amount];
            arrow_image_1.style.position = "absolute";
            // arrow_image.className = "arrow_class";
            // (Max-min)+min
            x = Math.floor(Math.random() * (1000 - 300) + 300);
            arrow_image_1.style.left = x + 'px';
            // console.log(x);
            y = Math.floor(Math.random() * (500 - 80) + 80);
            arrow_image_1.style.top = y + 'px';
            // console.log(y);
            main_view.appendChild(arrow_image_1);
            arrow_count++;
            arrow_1 = 1;
            if (rand_amount == 0) {
                arrow_keycode_1 = 38;
            } else if (rand_amount == 1) {
                arrow_keycode_1 = 40;
            } else if (rand_amount == 2) {
                arrow_keycode_1 = 37;
            } else if (rand_amount == 3) {
                arrow_keycode_1 = 39;
            }
            // console.log(arrow_image_1);
            // console.log(arrow_keycode_1);
        } else if (arrow_2 == 0) {
            arrow_image_2 = document.createElement('img');
            arrow_image_2.src = arrow_matrix[rand_amount];
            arrow_image_2.style.position = "absolute";
            x = Math.floor(Math.random() * (1000 - 300) + 300);
            arrow_image_2.style.left = x + 'px';
            y = Math.floor(Math.random() * (500 - 80) + 80);
            arrow_image_2.style.top = y + 'px';
            main_view.appendChild(arrow_image_2);
            arrow_count++;
            arrow_2 = 1;
            if (rand_amount == 0) {
                arrow_keycode_2 = 38;
            } else if (rand_amount == 1) {
                arrow_keycode_2 = 40;
            } else if (rand_amount == 2) {
                arrow_keycode_2 = 37;
            } else if (rand_amount == 3) {
                arrow_keycode_2 = 39;
            }
            // console.log(arrow_image_2);
            // console.log(arrow_keycode_2);
        } else if (arrow_3 == 0) {
            arrow_image_3 = document.createElement('img');
            arrow_image_3.src = arrow_matrix[rand_amount];
            arrow_image_3.style.position = "absolute";
            x = Math.floor(Math.random() * (1000 - 300) + 300);
            arrow_image_3.style.left = x + 'px';
            y = Math.floor(Math.random() * (500 - 80) + 80);
            arrow_image_3.style.top = y + 'px';
            main_view.appendChild(arrow_image_3);
            arrow_count++;
            arrow_3 = 1;
            if (rand_amount == 0) {
                arrow_keycode_3 = 38;
            } else if (rand_amount == 1) {
                arrow_keycode_3 = 40;
            } else if (rand_amount == 2) {
                arrow_keycode_3 = 37;
            } else if (rand_amount == 3) {
                arrow_keycode_3 = 39;
            }
            // console.log(arrow_image_3);
            // console.log(arrow_keycode_3);
        } else if (arrow_4 == 0) {
            arrow_image_4 = document.createElement('img');
            arrow_image_4.src = arrow_matrix[rand_amount];
            arrow_image_4.style.position = "absolute";
            x = Math.floor(Math.random() * (1000 - 300) + 300);
            arrow_image_4.style.left = x + 'px';
            y = Math.floor(Math.random() * (500 - 80) + 80);
            arrow_image_4.style.top = y + 'px';
            main_view.appendChild(arrow_image_4);
            arrow_count++;
            arrow_4 = 1;
            if (rand_amount == 0) {
                arrow_keycode_4 = 38;
            } else if (rand_amount == 1) {
                arrow_keycode_4 = 40;
            } else if (rand_amount == 2) {
                arrow_keycode_4 = 37;
            } else if (rand_amount == 3) {
                arrow_keycode_4 = 39;
            }
            // console.log(arrow_image_4);
            // console.log(arrow_keycode_4);
        } else if (arrow_5 == 0) {
            arrow_image_5 = document.createElement('img');
            arrow_image_5.src = arrow_matrix[rand_amount];
            arrow_image_5.style.position = "absolute";
            x = Math.floor(Math.random() * (1000 - 300) + 300);
            arrow_image_5.style.left = x + 'px';
            y = Math.floor(Math.random() * (500 - 80) + 80);
            arrow_image_5.style.top = y + 'px';
            main_view.appendChild(arrow_image_5);
            arrow_count++;
            arrow_5 = 1;
            if (rand_amount == 0) {
                arrow_keycode_5 = 38;
            } else if (rand_amount == 1) {
                arrow_keycode_5 = 40;
            } else if (rand_amount == 2) {
                arrow_keycode_5 = 37;
            } else if (rand_amount == 3) {
                arrow_keycode_5 = 39;
            }
            // console.log(arrow_image_5);
            // console.log(arrow_keycode_5);
        } else if (arrow_6 == 0) {
            arrow_image_6 = document.createElement('img');
            arrow_image_6.src = arrow_matrix[rand_amount];
            arrow_image_6.style.position = "absolute";
            x = Math.floor(Math.random() * (1000 - 300) + 300);
            arrow_image_6.style.left = x + 'px';
            y = Math.floor(Math.random() * (500 - 80) + 80);
            arrow_image_6.style.top = y + 'px';
            main_view.appendChild(arrow_image_6);
            arrow_count++;
            arrow_6 = 1;
            if (rand_amount == 0) {
                arrow_keycode_6 = 38;
            } else if (rand_amount == 1) {
                arrow_keycode_6 = 40;
            } else if (rand_amount == 2) {
                arrow_keycode_6 = 37;
            } else if (rand_amount == 3) {
                arrow_keycode_6 = 39;
            }
            // console.log(arrow_image_6);
            // console.log(arrow_keycode_6);
        } else if (arrow_7 == 0) {
            arrow_image_7 = document.createElement('img');
            arrow_image_7.src = arrow_matrix[rand_amount];
            arrow_image_7.style.position = "absolute";
            x = Math.floor(Math.random() * (1000 - 300) + 300);
            arrow_image_7.style.left = x + 'px';
            y = Math.floor(Math.random() * (500 - 80) + 80);
            arrow_image_7.style.top = y + 'px';
            main_view.appendChild(arrow_image_7);
            arrow_count++;
            arrow_7 = 1;
            if (rand_amount == 0) {
                arrow_keycode_7 = 38;
            } else if (rand_amount == 1) {
                arrow_keycode_7 = 40;
            } else if (rand_amount == 2) {
                arrow_keycode_7 = 37;
            } else if (rand_amount == 3) {
                arrow_keycode_7 = 39;
            }
            // console.log(arrow_image_7);
            // console.log(arrow_keycode_7);
        } else if (arrow_8 == 0) {
            arrow_image_8 = document.createElement('img');
            arrow_image_8.src = arrow_matrix[rand_amount];
            arrow_image_8.style.position = "absolute";
            x = Math.floor(Math.random() * (1000 - 300) + 300);
            arrow_image_8.style.left = x + 'px';
            y = Math.floor(Math.random() * (500 - 80) + 80);
            arrow_image_8.style.top = y + 'px';
            main_view.appendChild(arrow_image_8);
            arrow_count++;
            arrow_8 = 1;
            if (rand_amount == 0) {
                arrow_keycode_8 = 38;
            } else if (rand_amount == 1) {
                arrow_keycode_8 = 40;
            } else if (rand_amount == 2) {
                arrow_keycode_8 = 37;
            } else if (rand_amount == 3) {
                arrow_keycode_8 = 39;
            }
            // console.log(arrow_image_8);
            // console.log(arrow_keycode_8);
        } else if (arrow_9 == 0) {
            arrow_image_9 = document.createElement('img');
            arrow_image_9.src = arrow_matrix[rand_amount];
            arrow_image_9.style.position = "absolute";
            x = Math.floor(Math.random() * (1000 - 300) + 300);
            arrow_image_9.style.left = x + 'px';
            y = Math.floor(Math.random() * (500 - 80) + 80);
            arrow_image_9.style.top = y + 'px';
            main_view.appendChild(arrow_image_9);
            arrow_count++;
            arrow_9 = 1;
            if (rand_amount == 0) {
                arrow_keycode_9 = 38;
            } else if (rand_amount == 1) {
                arrow_keycode_9 = 40;
            } else if (rand_amount == 2) {
                arrow_keycode_9 = 37;
            } else if (rand_amount == 3) {
                arrow_keycode_9 = 39;
            }
            // console.log(arrow_image_9);
            // console.log(arrow_keycode_9);
        } else if (arrow_10 == 0) {
            arrow_image_10 = document.createElement('img');
            arrow_image_10.src = arrow_matrix[rand_amount];
            arrow_image_10.style.position = "absolute";
            x = Math.floor(Math.random() * (1000 - 300) + 300);
            arrow_image_10.style.left = x + 'px';
            y = Math.floor(Math.random() * (500 - 80) + 80);
            arrow_image_10.style.top = y + 'px';
            main_view.appendChild(arrow_image_10);
            arrow_count++;
            arrow_10 = 1;
            if (rand_amount == 0) {
                arrow_keycode_10 = 38;
            } else if (rand_amount == 1) {
                arrow_keycode_10 = 40;
            } else if (rand_amount == 2) {
                arrow_keycode_10 = 37;
            } else if (rand_amount == 3) {
                arrow_keycode_10 = 39;
            }
            // console.log(arrow_image_10);
            // console.log(arrow_keycode_10);
        }
    }
}
var score_plus = 0;
// 6.消除線與圖片的碰撞設定
function impact() {
    var line_position = document.getElementById('main_line');
    var y = line_position.offsetTop;
    var y_plus = line_position.offsetHeight;
    var main_view = document.getElementById('game_view');
    if (y < arrow_image_1.offsetTop + arrow_image_1.offsetHeight &&
        y + y_plus > arrow_image_1.offsetTop &&
        arrow_keycode_1 == key_in) {
        // console.log("碰撞成功")
        main_view.removeChild(arrow_image_1);
        score_plus = score_plus +10;
        document.getElementById("cnt_score").innerText = score_plus; 
    } else if (y < arrow_image_2.offsetTop + arrow_image_2.offsetHeight &&
        y + y_plus > arrow_image_2.offsetTop &&
        arrow_keycode_2 == key_in) {
        main_view.removeChild(arrow_image_2);
        key_in = 0;
        score_plus = score_plus +10;
        document.getElementById("cnt_score").innerText = score_plus; 
    } else if (y < arrow_image_3.offsetTop + arrow_image_3.offsetHeight &&
        y + y_plus > arrow_image_3.offsetTop &&
        arrow_keycode_3 == key_in) {
        main_view.removeChild(arrow_image_3);
        key_in = 0;
        score_plus = score_plus +10;
        document.getElementById("cnt_score").innerText = score_plus;  
    } else if (y < arrow_image_4.offsetTop + arrow_image_4.offsetHeight &&
        y + y_plus > arrow_image_4.offsetTop &&
        arrow_keycode_4 == key_in) {
        main_view.removeChild(arrow_image_4);
        key_in = 0;
        score_plus = score_plus +10;
        document.getElementById("cnt_score").innerText = score_plus;  
    } else if (y < arrow_image_5.offsetTop + arrow_image_5.offsetHeight &&
        y + y_plus > arrow_image_5.offsetTop &&
        arrow_keycode_5 == key_in) {
        main_view.removeChild(arrow_image_5);
        key_in = 0;
        score_plus = score_plus +10;
        document.getElementById("cnt_score").innerText = score_plus; 
    } else if (y < arrow_image_6.offsetTop + arrow_image_6.offsetHeight &&
        y + y_plus > arrow_image_6.offsetTop &&
        arrow_keycode_6 == key_in) {
        main_view.removeChild(arrow_image_6);
        key_in = 0;
        score_plus = score_plus +10;
        document.getElementById("cnt_score").innerText = score_plus;  
    } else if (y < arrow_image_7.offsetTop + arrow_image_7.offsetHeight &&
        y + y_plus > arrow_image_7.offsetTop &&
        arrow_keycode_7 == key_in) {
        main_view.removeChild(arrow_image_7);
        key_in = 0;
        score_plus = score_plus +10;
        document.getElementById("cnt_score").innerText = score_plus; 
    } else if (y < arrow_image_8.offsetTop + arrow_image_8.offsetHeight &&
        y + y_plus > arrow_image_8.offsetTop &&
        arrow_keycode_8 == key_in) {
        main_view.removeChild(arrow_image_8);
        key_in = 0;
        score_plus = score_plus +10;
        document.getElementById("cnt_score").innerText = score_plus; 
    } else if (y < arrow_image_9.offsetTop + arrow_image_9.offsetHeight &&
        y + y_plus > arrow_image_9.offsetTop &&
        arrow_keycode_9 == key_in) {
        main_view.removeChild(arrow_image_9);
        key_in = 0;
        score_plus = score_plus +10;
        document.getElementById("cnt_score").innerText = score_plus;  
    } else if (y < arrow_image_10.offsetTop + arrow_image_10.offsetHeight &&
        y + y_plus > arrow_image_10.offsetTop &&
        arrow_keycode_10 == key_in) {
        main_view.removeChild(arrow_image_10);
        key_in = 0;
        score_plus = score_plus +10;
        document.getElementById("cnt_score").innerText = score_plus; 
    }
}

// 7. 方向鍵消除設定

var key_in = 0;

function remove_arrow(myevent) {
    switch (myevent.keyCode) {
        case 38:
            key_in = 38;
            // console.log(key_in);
            break;
        case 40:
            key_in = 40;
            // console.log(key_in);
            break;
        case 37:
            key_in = 37;
            // console.log(key_in);
            break;
        case 39:
            key_in = 39;
            // console.log(key_in);
            break;
    }
}

// 8.其它功能
// 8.1倒數計時結束
function count_down() {
    begin_time = document.getElementById("cnt_time").value;
    var count_seconds = setInterval(function () {
        //裡面放要執行的方法
        if (begin_time > 1 ) {
            begin_time--;
            // console.log(begin_time);
            document.getElementById("cnt_time").value = begin_time;
        } else {
            document.getElementById("cnt_time").value = 0;
            clearInterval(line_ctrl);
            clearInterval(arrow_ctrl);
            clearInterval(line_hit_arrow);
            clearInterval(count_seconds);
        }
        if (score_plus == 100){
            clearInterval(line_ctrl);
            clearInterval(arrow_ctrl);
            clearInterval(line_hit_arrow);
            clearInterval(count_seconds);
        }
    }, 1000);
}