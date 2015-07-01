# Kirby-Structure-Tabs
Tabbed Fields for Structured Content

![Structure Tabs](/structure-tabs.gif)

The structure tab field type is designed specifically for use within the structure field and will not work outside of that context.

The structure tab field also has the ability to track which tab was open when the user closed the modal. Essentially each time you click on one of that tabs, you're checking the box for that group of content and unchecking the box for the other groups.

This data can be useful in your templates. 


#### Blueprint Example
``` YAML
title: Page
pages: true
files: true
fields:
  title:
    label: Title
    type:  text
  modules:
    label: Modules
    type: structure
    entry: >
      {{projecttitle}}<br />
      {{projectdate}}<br />
      {{projectdescription}}<br>
      {{name}}<br />
      {{email}}<br />
    fields:
      tab1:
        label: Project Info
        type: structuretab
      projecttitle:
        label: Project Title
        type: text
        width: 1/2
      projectdate:
        label: Project Date
        type: date
        width: 1/2
      projectdescription:
        label: Project Description
        type: textarea
      tab2:
        label: Author
        type: structuretab
      name:
        label: Name
        type: text
      email:
        label: Email
        type: email
```
