# reproduction for HybridShadowRegistry.link null pointer exception in unistyles <=3.1.1

## reproduction steps

1. create dynamic style function with an undefined value passed to it
2. create a dynamic style function with a nil value passed to it
3. create a unistyle variant with an undefined value passed to it

see ~/app/index.tsx for examples

create a custom device in android studio with a very small amount of ram (70mb)
