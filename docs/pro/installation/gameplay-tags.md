---
sidebar_label: 'Gameplay Tags'
sidebar_position: 3
---

# Gameplay Tags

We need to add all the required **Gameplay Tags** that **Narrative Pro** uses in order to make abilities work.

:::warning

The gameplay tags **must** be named **exactly** the same name we state here. Functionality will not work if you don't name it the same.

:::

Open your **Content Drawer** and navigate to **Content** -> **Cues**

## GC_WeaponImpact

Open **GC_WeaponImpact** and click **Class Defaults** 

![weaponimpact-classdefaults.png](/img/pro/Installation/gameplaytags/weaponimpact-classdefaults.png)

You can see the **Gameplay Cue Tag** is already populated. This is an **error**. It is the correct Tag, but it needs creating.

![weaponimpact-badtags.png](/img/pro/Installation/gameplaytags/weaponimpact-badtags.png)

Click the tag to make Unreal throw the **error** then click **OK**.

![weaponimpact-unrealerror.png](/img/pro/Installation/gameplaytags/weaponimpact-unrealerror.png)

It will automatically open the **Gameplay Tag menu**. Click the **Green Plus** to start adding Tags. 

Set the **Name** to:

```ini
GameplayCue.Weapon.Impact
```
 
Set the Source to be the default `DefaultGameplayTags.ini` then click **Add New Tag**.

![weaponimpact-addingtag.png](/img/pro/Installation/gameplaytags/weaponimpact-addingtag.png)

Now select the newly created tag then click **Compile**.

![weaponimpact-selectingtag.png](/img/pro/Installation/gameplaytags/weaponimpact-selectingtag.png)

## GC_WeaponFire

Open **GC_WeaponFire** and add a new tag using the exact method we used above in [above](#gc_weaponimpact) called:

```ini
GameplayCue.Weapon.Fire
```

![weaponfire-addingtag.png](/img/pro/Installation/gameplaytags/weaponfire-addingtag.png)

Now select the newly created tag then click **Compile**.

## GC_TakeDamage

Open **GC_TakeDamage** and add a new tag using the exact method we used above in [above](#gc_weaponimpact) called:

```ini
GameplayCue.TakeDamage
```

![takedamage-addingtag.png](/img/pro/Installation/gameplaytags/takedamage-addingtag.png)

Now select the newly created tag then click **Compile**.

:::note

This tag does not belong in the **weapon** group.

:::