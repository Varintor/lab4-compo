<template>
    <div class="networkError">
        <h1>Uh-Oh!</h1>

        <h3>
            It looks like you're experiencing some network issue, please take a breath antialiased
            <a href="#" @click="$route.go(-1)">click here</a> to try again.
        </h3>
    </div>
</template>