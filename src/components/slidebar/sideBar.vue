<template>
    <div class="blog-up">
        <!-- up头像界面 -->
        <div>
            <img src="@/assets/avatar.jpg" class="avatar">
        </div>

        <!-- up昵称界面 -->
        <div style="font-size: 30px;">
            <text>nickname</text>
        </div>
        <!-- up名言界面 -->
        <div style="font-size: 20px;">
            <text>infofofoofofofofofoffofo</text>
        </div>
        <div>
            <div style="display: flex;flex-direction: column;">
                <router-link to="/tags" class="statistics">
                    <span>文章 </span>
                    <div style="display: flex;justify-content: center;">
                        <text>10</text>
                    </div>
                </router-link>


            </div>
            <div style="display: flex;flex-direction: column;margin-left: 30px;">
                <router-link to="/tags" class="statistics">
                    <span>分类</span>
                    <div style="display: flex;justify-content: center;">
                        <text>10</text>
                    </div>
                </router-link>


            </div>
            <div style="display: flex;flex-direction: column;margin-left: 30px;">
                <router-link to="/tags" class="statistics">
                    <span>标签</span>
                    <div style="display: flex;justify-content: center;">
                        <text>10</text>
                    </div>
                </router-link>


            </div>
        </div>
        <div>
            <div class="follow">
                <img src="@/assets/github.png" style="height: 18px;margin-right: 10px;">
                <text>Follow me</text>
            </div>
        </div>

        <div>

            <svg t="1714531070595" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="4238" width="30" height="30">
                <path
                    d="M512 1024C229.222 1024 0 794.778 0 512S229.222 0 512 0s512 229.222 512 512-229.222 512-512 512z m259.149-568.883h-290.74a25.293 25.293 0 0 0-25.292 25.293l-0.026 63.206c0 13.952 11.315 25.293 25.267 25.293h177.024c13.978 0 25.293 11.315 25.293 25.267v12.646a75.853 75.853 0 0 1-75.853 75.853h-240.23a25.293 25.293 0 0 1-25.267-25.293V417.203a75.853 75.853 0 0 1 75.827-75.853h353.946a25.293 25.293 0 0 0 25.267-25.292l0.077-63.207a25.293 25.293 0 0 0-25.268-25.293H417.152a189.62 189.62 0 0 0-189.62 189.645V771.15c0 13.977 11.316 25.293 25.294 25.293h372.94a170.65 170.65 0 0 0 170.65-170.65V480.384a25.293 25.293 0 0 0-25.293-25.267z"
                    fill="#C71D23" p-id="4239"></path>
            </svg>
            <svg t="1714531136614" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="5255" width="30" height="30" style="margin-left: 20px;">
                <path
                    d="M146.08 742.08c16 11.68 32-8.96 43.2-29.6s18.56-38.4 20.48-32 3.68 12.64 6.08 19.36A275.04 275.04 0 0 0 266.56 784c4.96 5.6-29.92 16-50.72 51.36s5.92 100 109.6 100c133.76 0 163.68-47.04 166.4-46.88a188.8 188.8 0 0 0 21.28 0 113.44 113.44 0 0 0 19.52 0c3.04 0 18.56 11.84 43.52 24a216.96 216.96 0 0 0 117.92 22.88c153.28-16 129.92-67.52 117.92-100s-57.12-49.6-55.04-51.84a230.72 230.72 0 0 0 55.04-102.72c2.4-7.36 12 12 24.32 32s29.6 41.6 43.68 29.6c11.36-9.76 34.24-50.08 11.36-135.36s-66.88-104.96-65.92-120.96a305.6 305.6 0 0 0-0.8-62.88C816 393.6 800 400 800 393.6 800 224 672 87.36 515.36 87.36S231.36 224 231.36 393.6c0 13.44-11.84 3.52-21.6 29.28-4.48 11.52 1.92 18.88 0 62.88 0 11.84-51.68 65.28-71.84 120.96s-22.88 113.28 8.16 135.36z"
                    fill="#68A5E1" p-id="5256"></path>
            </svg>
            <svg t="1714531180375" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="6330" width="30" height="30" style="margin-left: 20px;">
                <path
                    d="M512.345366 6.139837c279.580556 0 506.184551 226.64902 506.184551 506.185574 0 279.580556-226.603994 506.184551-506.184551 506.184551-279.534508 0-506.184551-226.603994-506.184551-506.184551C6.160815 232.788857 232.809835 6.139837 512.345366 6.139837L512.345366 6.139837zM515.268952 541.913287c-32.689517 0-28.170596-28.702716-65.288982-28.702716-16.786315 0-45.533033 30.651091-57.757448 40.926108-18.337647 15.371082-35.612079 29.633924-53.329603 45.445028l-93.148493 78.754668c-23.342638 22.147416 1.727341 37.116339 30.695093 37.116339L746.12683 715.452715c13.198603 0 41.370223-6.553253 41.370223-17.540492 0-21.437242-12.757558-24.049742-35.346019-44.203758L605.627912 527.960507c-23.51967-22.412452-37.47245-24.228821-62.897515-3.233648-4.428869 3.631714-8.060583 6.112208-12.667507 9.655917C525.944082 537.483394 521.469164 541.913287 515.268952 541.913287L515.268952 541.913287zM182.535825 414.524968l0 206.938096c0 17.364483 5.493108 31.626301 23.121604 24.892947 7.043417-2.65855 77.868485-63.33856 86.283132-71.445192l70.693062-59.839877c12.977569-10.453073 38.003546-28.879748 38.003546-41.636283 0-14.926968-10.719132-19.400862-24.095791-30.030967l-122.161271-95.939049c-13.81975-10.985192-14.616906-17.983583-34.016745-4.960988C202.867896 354.286002 182.535825 385.77825 182.535825 414.524968L182.535825 414.524968zM625.116779 468.650703c0 16.123212 9.742898 18.957771 20.286022 29.05678l18.159592 15.281031c2.835581 2.260483 3.809769 3.765767 6.64535 6.158257l62.807465 53.417607c4.782933 4.428869 8.060583 6.687306 12.71151 11.072173l31.051203 26.310226c11.692297 10.453073 55.720046 57.361429 62.629409 23.653723 4.428869-21.527292 2.214435-174.782745 2.214435-207.91433 0-40.838104-24.8909-80.880075-48.457642-88.49859-13.508665-4.384867-10.984169 0-24.758893 10.453073l-100.768031 79.107709C653.375379 438.309674 625.116779 455.629131 625.116779 468.650703L625.116779 468.650703zM313.069787 326.912561c0 5.315052 16.96437 17.894555 21.570271 21.438265l48.28061 37.737486c8.28264 6.201236 16.122189 12.623505 24.095791 18.868743l72.331375 56.607252c16.609283 12.490475 14.83794 15.058974 35.922141 15.058974 14.174837 0 38.35761-22.500457 52.354392-33.662681l120.477932-94.433766c6.511297-5.050016 21.437242-14.793938 21.437242-21.615297 0-3.720741-2.65855-6.333242-6.377244-6.333242L319.403029 320.578296C315.683311 320.578296 313.069787 323.19182 313.069787 326.912561z"
                    fill="#50b0e0" p-id="6331"></path>
            </svg>


        </div>





    </div>
    <div class="annociation">
        <div style="display: flex;flex-direction: row;">
            <svg t="1714532266937" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                p-id="9038" width="20" height="20" style="margin-top: 20px;margin-left: 20px">
                <path
                    d="M960 812.8h-64V448c0-185.6-134.4-345.6-313.6-377.6V64c0-38.4-25.6-64-64-64s-64 25.6-64 64v6.4C268.8 96 128 256 128 448v364.8H64v64h262.4C345.6 960 422.4 1024 512 1024s166.4-64 185.6-147.2H960v-64zM512 960c-57.6 0-102.4-38.4-121.6-83.2h236.8c-12.8 44.8-57.6 83.2-115.2 83.2z m-320-147.2V448c0-179.2 147.2-320 320-320s320 147.2 320 320v364.8H192z"
                    fill="#0B70C0" p-id="9039"></path>
            </svg>
            <text style="margin-top: 20px;margin-left: 10px">公告</text>
        </div>
        <div style="margin: 20px;">
            这是一个公告
        </div>
    </div>

    <el-card class="categories-card">
        <div style="display: flex;flex-direction: row;">
            <el-icon size="20px">
                <Menu />
            </el-icon>
            <div style="margin-left: 10px;">
                分类
            </div>

        </div>
        <div>
            <div v-for="item in 10" :key="item" class="categories-card-item">
                <div style="display: flex;flex-direction: row;justify-content: space-between; margin: 20px 10px;">
                    <div>
                        分类1
                    </div>
                    <div>
                        20
                    </div>

                </div>
            </div>
        </div>
    </el-card>

    <el-card class="tag-card">
        <div style="display: flex;flex-direction: row;">
            <el-icon size="20px">
                <Management />
            </el-icon>
            <div style="margin-left: 10px;">
                标签
            </div>

        </div>
        <div>
            <div style="display: flex;flex-wrap: wrap;justify-content: start;margin-top: 5px">
                <el-tag class="el-tag-item" type="primary" v-for="item in 9" :key="item" style="margin: 8px">Tag</el-tag>
            </div>

        </div>
    </el-card>

    <el-card class="time-card">
        <div style="display: flex;flex-direction: row;">
            <el-icon size="20px">
                <List />
            </el-icon>
            <div style="margin-left: 10px;">
                归档
            </div>


        </div>
        <div>
            <div v-for="item in 3" :key="item" class="categories-card-item">
                <div style="display: flex;flex-direction: row;justify-content: space-between; margin: 20px 10px;">
                    <div>
                        分类1
                    </div>
                    <div>
                        20
                    </div>

                </div>
            </div>
        </div>

    </el-card>

    <el-card class="static-card">
        <div style="display: flex;flex-direction: row;">
            <el-icon size="20px">
                <TrendCharts />
            </el-icon>
            <div style="margin-left: 10px;">
                统计信息
            </div>

        </div>
        <div>

            <div style="display: flex;flex-direction: row;justify-content: space-between; margin: 10px 0px;">
                <div>
                    本网站已经运行
                </div>
                <div>
                    {{ iDays }} 天
                </div>

            </div>

        </div>
    </el-card>

</template>
<script setup>
import { Menu, Management, List, TrendCharts } from '@element-plus/icons-vue'
// 计算运行天数
//sDate1和sDate2是2002-12-18格式  
var now = new Date();
var sDate2 = "2024-04-18";
var nowData = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate();
var aDate, oDate2, iDays
aDate = nowData.split("-")
nowData = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])    //转换为12-18-2002格式  
aDate = sDate2.split("-")
oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0])
iDays = parseInt(Math.abs(nowData - oDate2) / 1000 / 60 / 60 / 24)    //把相差的毫秒数转换为天数  
</script>

<style lang="scss" scoped>
.blog-up {
    width: 100%;
    height: 450px;
    background-color: white;
    border-radius: 10px 10px 10px 10px;
    display: flex;
    flex-direction: column;

    &>* {
        display: flex;
        justify-content: center;
        margin: 10px 0;

    }


    .avatar {
        width: 110px;
        height: 110px;
        border-radius: 50%;
        margin-top: 20px;
    }
}

.statistics {
    text-decoration: none;
    color: #000;

    &:hover {
        color: #80c8f8;
    }

}

.follow {
    height: 32px;
    width: 200px;
    background-color: #80c8f8;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:hover {
        background-color: #e8a60c;
    }
}

.annociation {
    margin-top: 15px;
    width: 100%;
    height: 100px;
    background-color: white;
    border-radius: 10px 10px 10px 10px;
}

.categories-card,
.tag-card,
.time-card,
.static-card {
    margin-top: 15px;
    width: 100%;
    background-color: white;
    border-radius: 10px 10px 10px 10px;
    
}
.categories-card-item{
    cursor: pointer;
    &:hover{
        color: #80c8f8;
    }
}
.el-tag-item{
    cursor: pointer;
    background-color: #e2edf4;
    color: #000;
    &:hover{
        background-color: #80c8f8;
        color: #ffffff;
    }
}
</style>