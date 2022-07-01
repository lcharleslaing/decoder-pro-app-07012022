<script>
    // @ts-nocheck

    export let width = 100;
    export let height = width;
    export let radiusRatio = 0.15;
    export let radius = width * radiusRatio;
    export let fill = "#202020";
    export let strokeWidth = width * 0.05;
    export let correctWidth = width - strokeWidth * 2;
    export let correctHeight = height - strokeWidth * 2;
</script>

<svg {width} {height}>
    <rect
        rx={radius}
        ry={radius}
        x={strokeWidth}
        y={strokeWidth}
        width={correctWidth}
        height={correctHeight}
        {fill}
        stroke="gray"
        stroke-width={strokeWidth}
    />
</svg>

<style>
    svg {
        margin: auto;
    }
</style>
