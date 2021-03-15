// 评论组件
<template>
    <div id="comment">
        <h1>发表评论</h1>
        <hr>
        <textarea name="comment" rows="4" maxlength="128" placeholder="欢迎吐槽" v-model="msg"></textarea>
        <mt-button type="primary" size="large" @click="sendmsg()">发表评论</mt-button>
        <div class="cmt-list">
            <h3>热门评论</h3>
            <div class="cmt-item" v-for="(item,i) in cmtlist" :key="i">
                <div class="cmt-title">
                    <p>
                        <span>{{item.user_name}}</span>
                        <span>❤&nbsp;1</span>
                    </p>

                </div>
                <div class="cmt-content">
                    <p>
                        {{item.content}}
                    </p>
                </div>
                <div class="cmt-bottom">
                    <p>{{item.add_time | dateFormat}}</p>
                </div>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click="loadmore()">加载更多</mt-button>
    </div>
</template>

<script>
    // 导入mintui中的Toast弹窗
    import {Toast} from 'mint-ui'
    export default {
        data() {
            return {
                // 默认第一页评论
                page: 1,
                // 评论列表
                cmtlist: [],
                msg:''
            }
        },
        methods: {
            async getCommentByPage() {// 获取评论列表
                const { data } = await this.$http.get('/api/getcomments/' + this.newsid + '?pageindex=' + this.page)
                console.log(data);
                // concat() 方法用于连接两个或多个数组。
                if (data.status === 0) this.cmtlist = this.cmtlist.concat(data.message)
            },
            loadmore(){//加载更多评论
                this.page++
                this.getCommentByPage()
            },
            async sendmsg(){//发表评论
                // 判断评论是否为空
                if(this.msg.trim().length <= 0) Toast('评论不能为空')
                const {data} = await this.$http.post('/api/postcomment/'+this.newsid,{ content:this.msg.trim()})
                console.log(data);
                if(data.status === 0 ) Toast(data.message);this.msg = '';this.cmtlist = [];this.getCommentByPage()
            }
        },
        created() {
            this.getCommentByPage()
        },
        props: ['newsid']
    }
</script>

<style lang="scss" scoped>
    #comment {
        padding: 5px;
    }

    textarea {
        margin: 0;
    }

    .cmt-list {
        .cmt-item {
            h3 {
                margin: 15px 0;
            }

            .cmt-title {
                p {
                    display: flex;
                    justify-content: space-between;

                    span:nth-of-type(1) {
                        color: #26a2ff;
                    }

                    span:nth-of-type(2) {
                        color: red;
                    }
                }
            }

            .cmt-content {
                p {
                    color: black;
                }
            }
        }
    }
</style>