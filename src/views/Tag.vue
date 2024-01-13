<template>
    <div v-if="error">{{error}}</div>
    <div v-if="posts.length && posts">
        <PostsList :posts="filteredTags"></PostsList>
    </div>
    <div v-else>
        loading...
    </div>
</template>

<script>
import PostsList from '../components/PostsList'
import { computed } from 'vue'
import getPosts from '../composables/getPosts'
export default {
  components: {
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

</style>