var j = -.575;

for (let i = 411; i > 320; i--)
{
    //console.log("@media (max-width: " + i + "px) { .providers img, .providers p, .providers h3 { margin-left: " + j + "px; } }")
    console.log("@media (max-width: " + i + "px) { .providers img { margin-left: " + j + "px; } }")
    j = j - .575;
}