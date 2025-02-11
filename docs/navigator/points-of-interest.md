---
sidebar_label: 'Point of interest'
---

# Point of interest

The point of interest (POI) or fast travel locations are a common feature in open world games. Allowing players to quickly teleport (or fast travel) around large landscapes after discovering areas.

## Adding POI

To add a POI, simply drag in the BP_PointOfInterst blueprint into your map placing it where you require.

![point-of-interest.webp](//img/navigator/point-of-interest.webp)

After placing the POI, you can set up the options required. The POI Display Name is the name of the fast travel marker on the world map.

The POI Tags are a type of GamePlay tags and are used for saving, loading and checking if the player has access to the current POI. Make sure to name them unique.

![poi-tags.webp](//img/navigator/poi-tags.webp)

![poi-map.webp](//img/navigator/poi-map.webp)

## Fast travel location

The POI controls multiple predefined points for your game. It contains the POI marker which renders on the UI widgets and the fast travel location actor. This actor allows you to specifically define a location you wish the player to arrive at.

It is common that you will have the world marker at one location but the player fast travels close by to another location.

![poi-fasttravel.webp](//img/navigator/poi-fasttravel.webp)

## Undiscovered POI

If a POI is undiscovered, Navigator will color the marker differently to indicate to the player if they have previously discovered it or not.

### Undiscovered:

![poi-undiscovered-world.webp](//img/navigator/poi-undiscovered-world.webp)

![po-undiscovered-map.webp](//img/navigator/po-undiscovered-map.webp)

### Discovered:

![poi-discoveredmap.webp](//img/navigator/poi-discoveredmap.webp)

Upon discovering a POI, you can now select it from the world map to be teleported to the fast travel location.

![poi-discovered-world.webp](//img/navigator/poi-discovered-world.webp)