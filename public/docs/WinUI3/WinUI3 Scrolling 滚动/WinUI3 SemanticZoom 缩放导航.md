# WinUI3 SemanticZoom 缩放导航

```xml
<SemanticZoom Height="500">
    <SemanticZoom.ZoomedInView>
        <GridView ItemsSource="{x:Bind cvsGroups.View}" SelectionMode="None"
                  ItemTemplate="{StaticResource ZoomedInTemplate}">
            <GridView.GroupStyle>
                <GroupStyle HeaderTemplate="{StaticResource ZoomedInGroupHeaderTemplate}" />
            </GridView.GroupStyle>
        </GridView>
    </SemanticZoom.ZoomedInView>

    <SemanticZoom.ZoomedOutView>
        <ListView ItemsSource="{x:Bind cvsGroups.View.CollectionGroups}" HorizontalAlignment="Stretch"
                  SelectionMode="None" ItemTemplate="{StaticResource ZoomedOutTemplate}" />
    </SemanticZoom.ZoomedOutView>
</SemanticZoom>
```

![Untitled](WinUI3%20SemanticZoom%20%E7%BC%A9%E6%94%BE%E5%AF%BC%E8%88%AA%20bf7ffc352a2344e7858c9fe18d937de9/Untitled.png)

![Untitled](WinUI3%20SemanticZoom%20%E7%BC%A9%E6%94%BE%E5%AF%BC%E8%88%AA%20bf7ffc352a2344e7858c9fe18d937de9/Untitled%201.png)
