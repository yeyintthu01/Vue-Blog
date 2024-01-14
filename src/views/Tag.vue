<template>
    <div class="tag">
        <div v-if="error">{{error}}</div>
        <div v-if="posts.length && posts" class="layout">
            <div>
                <PostsList :posts="filteredTags"></PostsList>
            </div>
            <div>
                <TagCloud :posts="posts"></TagCloud>
            </div>
        </div>
        <div v-else>
            <Spinner></Spinner>
        </div>
    </div>
</template>

<script>
import Spinner from '../components/Spinner'
import TagCloud from '../components/TagCloud'
import PostsList from '../components/PostsList'
import { computed } from 'vue'
import getPosts from '../composables/getPosts'
export default {
  components: {
    Spinner,
    TagCloud,
    PostsList },
    props:['tag'],
    setup(props){
        let {posts,error,load}=getPosts()
        load()
        let filteredTags=computed(()=>{
            return posts.value.filter((post)=>{
                return post.tags.includes(props.tag)
            })
        })
        return {posts,error,filteredTags}
    }
}
</script>

<style>
    .tag{
        max-width: 1200px;
        margin: 0 auto;
    }
</style>