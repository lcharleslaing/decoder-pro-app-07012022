<script lang="ts">
    import { onMount, setContext } from "svelte";

    /**
     * @type {HTMLCanvasElement}
     */
    let canvas: HTMLCanvasElement;

    let drawFunctions: any[] = [];

    setContext("canvas", {
        register(drawFn: any) {
            drawFunctions.push(drawFn);
        },

        unregister(drawFn: any) {
            drawFunctions.push(drawFn);
        },
    });

    onMount(() => {
        const ctx = canvas.getContext("2d");

        function update() {
            drawFunctions.forEach((drawFn: any) => {
                drawFn(ctx);
            });
        }
    });
</script>

<canvas class="canvas mx-auto" bind:this={canvas} />
<slot />

<style>
    .canvas {
        width: 90vw;
        height: 50vh;
        border: 2px solid white;
        border-radius: 20px;
    }
</style>
