<template>
    <svg xmlns="http://www.w3.org/2000/svg" width="75" height="75" viewBox="0 0 150 130"
        style="--logo-line-color: #777; --logo-background-color: var(--p-surface-100); --logo-foreground-color: var(--p-primary-500); --logo-support-color: #E6302B;">
        <!-- Outer Shield -->
        <path d="M 40 19 
                L 110 19 
                C 130 49 135 99 75 139 
                C 15 99 20 49 40 19 
                Z" fill="var(--logo-background-color)" stroke="var(--logo-line-color)" stroke-width="3" />

        <!-- Quadrant Lines -->
        <line x1="75" y1="30" x2="75" y2="130" stroke="var(--logo-line-color)" stroke-width="2" />
        <line x1="40" y1="75" x2="110" y2="75" stroke="var(--logo-line-color)" stroke-width="2" />

        <!-- Small Circle at Cross Section -->
        <circle cx="75" cy="75" r="10" fill="var(--logo-foreground-color)" />

        <!-- Letters -->
        <text x="55" y="60" font-family="Arial, sans-serif" font-size="26" font-weight="bold" text-anchor="middle"
            fill="var(--logo-foreground-color)">
            B
        </text>
        <text x="95" y="60" font-family="Arial, sans-serif" font-size="26" font-weight="bold" text-anchor="middle"
            fill="var(--logo-foreground-color)">
            K
        </text>
        <text x="55" y="108" font-family="Arial, sans-serif" font-size="26" font-weight="bold" text-anchor="middle"
            fill="var(--logo-foreground-color)">
            S
        </text>
        <text x="95" y="108" font-family="Arial, sans-serif" font-size="26" font-weight="bold" text-anchor="middle"
            fill="var(--logo-foreground-color)">
            A
        </text>

        <!-- Paths for Curved Text -->
        <defs>
            <path id="topTextPath" d="M 7 30 A 120 120 0 0 1 145 30" fill="none" />
        </defs>

        <!-- Curved Text -->
        <text font-family="Arial, sans-serif" font-size="16" font-weight="bold" fill="var(--logo-foreground-color)">
            <textPath href="#topTextPath" text-anchor="middle" startOffset="50%">
                CMD UTRECHT
            </textPath>
        </text>
    </svg>
</template>