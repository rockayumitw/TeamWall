<script setup>
import UserInfo from './UserInfo.vue';
import IconThumbsUpVue from '@/components/icons/IconThumbsUp.vue';
import AvatarVue from './Avatar.vue';

defineProps({
  post: {
    type: Object,
    default() {
      return {};
    },
  },
});
</script>

<template>
  <div class="rounded-lg border-2 border-black bg-white p-6">
    <UserInfo
      class="mb-4"
      :imgUrl="post.avatar"
      :name="post.userName"
      userPageUrl="#"
      :subTitle="post.createAt"
    />
    <p class="mb-4 whitespace-pre">{{ post.content }}</p>
    <img
      class="max-h-96 w-full rounded-lg border-2 border-black object-cover object-center"
      v-if="post.updateImage"
      :src="post.updateImage"
      alt="貼文圖片"
    />
    <div>
      <button type="button" class="flex items-center justify-center py-5">
        <IconThumbsUpVue class="mr-2 h-5 w-5 text-primary" />
        <span> {{ post.likes }}</span>
      </button>
    </div>
    <!--留言-->
    <div class="flex items-center mb-5">
      <AvatarVue
        class="mx-2"
        size="40"
        :imgUrl="'https://i.pravatar.cc/150?img=19'"
      />
      <div class="flex w-full">
        <input class="border-2 border-black w-full" type="text" />
        <button class="border-2 border-black text-base text-white bg-primary inline-block w-full max-w-[128px]">留言</button>
      </div>
    </div>
    <div
      class="bg-secondary rounded-lg px-4 py-5 mb-4"
      v-for="(comment, index) in post.comments"
      :key="index"
    >
      <UserInfo
        class="mb-4"
        :imgUrl="comment.avatar"
        :name="comment.userName"
        userPageUrl="#"
        :subTitle="comment.createAt"
      />
      <p class="mb-4 whitespace-pre">{{ comment.content }}</p>
    </div>
  </div>
</template>
